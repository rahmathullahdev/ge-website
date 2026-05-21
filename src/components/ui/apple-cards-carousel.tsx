"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

// Helper for conditional classes (avoids external tailwind-merge dependency)
function cn(...inputs: (string | undefined | null | boolean | { [key: string]: boolean })[]) {
  return inputs
    .flatMap((input) => {
      if (!input) return [];
      if (typeof input === "string") return [input];
      return Object.entries(input)
        .filter(([_, value]) => value)
        .map(([key]) => key);
    })
    .join(" ");
}

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
  autoScroll?: boolean;
}

export interface Card {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: -1,
});

export const Carousel = ({ items, initialScroll = 0, autoScroll = true }: CarouselProps) => {
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (carouselContainerRef.current) {
      carouselContainerRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  // Smooth Auto-Scroll / Marquee Effect
  useEffect(() => {
    if (!autoScroll || !carouselContainerRef.current) return;

    let animationFrameId: number;
    const container = carouselContainerRef.current;

    const scrollStep = () => {
      if (!isHovered && container && currentIndex === -1) {
        container.scrollLeft += 0.5; // Premium slow glide speed
        
        // Wrap around smoothly to the beginning if we hit the end boundary
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 4) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [autoScroll, isHovered, currentIndex]);

  const checkScrollability = () => {
    if (carouselContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselContainerRef.current;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
    }
  };

  const scrollLeft = () => {
    if (carouselContainerRef.current) {
      carouselContainerRef.current.scrollBy({
        left: -480,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselContainerRef.current) {
      carouselContainerRef.current.scrollBy({
        left: 480,
        behavior: "smooth",
      });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselContainerRef.current) {
      const cardWidth = isMobile() ? 280 : 380; // card widths
      const gap = 20;
      const scrollPosition = (cardWidth + gap) * index;
      carouselContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
    setCurrentIndex(-1);
  };

  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        {/* Navigation Buttons on top right */}
        <div className="flex justify-end gap-2 px-4 md:px-8 mb-6">
          <button
            className="h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center disabled:opacity-30 border border-gray-200 dark:border-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all select-none"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <FiArrowLeft className="h-5 w-5 text-gray-800 dark:text-gray-200" />
          </button>
          <button
            className="h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center disabled:opacity-30 border border-gray-200 dark:border-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all select-none"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <FiArrowRight className="h-5 w-5 text-gray-800 dark:text-gray-200" />
          </button>
        </div>

        {/* Scroll container */}
        <div
          ref={carouselContainerRef}
          onScroll={checkScrollability}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex w-full overflow-x-scroll overscroll-x-contain py-4 md:py-8 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4 md:px-8"
        >
          <div className="flex flex-row justify-start gap-4 md:gap-6 max-w-7xl mx-auto">
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

// Outside click detection hook
export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

interface CardProps {
  card: Card;
  index: number;
  layout?: boolean;
}

export const Card = ({ card, index, layout = false }: CardProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      {/* Modal View */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 backdrop-blur-md p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              ref={containerRef}
              className="relative w-full max-w-4xl bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col border border-black/5 dark:border-white/5"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-50 h-10 w-10 rounded-full bg-black/20 dark:bg-white/10 hover:bg-black/30 dark:hover:bg-white/20 flex items-center justify-center text-white transition-all border border-white/10"
              >
                <FiX className="h-6 w-6" />
              </button>

              {/* Main Content inside Scrollable Card Detail */}
              <div className="overflow-y-auto flex-1 scrollbar-thin">
                {/* Hero image and titles inside modal */}
                <div className="relative h-64 md:h-[400px] w-full">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12">
                    <p className="text-sm font-bold tracking-wider text-[#06BAA3] uppercase mb-2">
                      {card.category}
                    </p>
                    <h3 className="text-2xl md:text-5xl font-extrabold text-white leading-tight font-sans">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Sub-body custom detailed text */}
                <div className="p-6 md:p-12">
                  {card.content}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Grid Card View */}
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-[420px] w-72 md:h-[500px] md:w-96 overflow-hidden flex flex-col justify-between items-start relative z-10 group/card transition-all duration-300 hover:shadow-xl border border-black/5 dark:border-white/5"
      >
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80 z-20" />
        
        {/* Background Image */}
        <img
          src={card.src}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover z-0 group-hover/card:scale-105 transition-transform duration-500"
        />

        {/* Floating Category Tag */}
        <div className="relative z-30 p-6">
          <span className="text-xs font-extrabold tracking-widest text-[#06BAA3] uppercase bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            {card.category}
          </span>
        </div>

        {/* Bottom Title text */}
        <div className="relative z-30 p-6 md:p-8 w-full text-left">
          <h3 className="text-lg md:text-2xl font-extrabold text-white leading-tight tracking-tight mb-2 group-hover/card:text-[#06BAA3] transition-colors duration-200">
            {card.title}
          </h3>
          <p className="text-xs text-gray-300 font-bold uppercase tracking-wider flex items-center gap-2 group-hover/card:gap-3 transition-all">
            <span>Explore Service</span>
            <FiArrowRight size={14} className="text-[#06BAA3]" />
          </p>
        </div>
      </motion.button>
    </>
  );
};
