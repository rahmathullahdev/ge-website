"use client";

const aiKeywords = [
  "Neural Networks", "LLM Fine-Tuning", "Cognitive Automation", "Vector Databases",
  "Computer Vision", "Deep Learning", "Generative AI Agent", "RAG Architecture", 
  "Predictive ML Models", "Robotic Process Automation", "Natural Language Systems"
];

export default function AIMarquee() {
  return (
    <section className="py-6 bg-[#F3F4F6] dark:bg-[#0A0A0A] border-t border-b border-gray-200 dark:border-[#2A2A2A] overflow-hidden transition-colors duration-300">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((set) => (
          <div key={set} className="flex items-center gap-8 pr-8">
            {aiKeywords.map((keyword, i) => (
              <span key={`${set}-${i}`} className="flex items-center gap-8">
                <span
                  className={`text-4xl md:text-5xl font-extrabold uppercase tracking-tight whitespace-nowrap ${
                    i % 2 === 0 ? "text-gray-900 dark:text-white" : "text-stroke-outline opacity-70 dark:opacity-100"
                  }`}
                >
                  {keyword}
                </span>
                <span className="text-2xl text-[#06BAA3]">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
