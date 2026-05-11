"use client";

const services = [
  "IT Solutions", "Global Reach", "Enterprise AI", "Best IT Agency Chennai",
  "Cybersecurity", "Cloud Infrastructure", "Web Development", "Mobile App Innovation", 
  "Strategic Consulting", "Top Ranked Tech India", "DevOps Scale"
];

export default function ServicesMarquee() {
  return (
    <section className="py-6 bg-[#F3F4F6] dark:bg-[#0A0A0A] border-t border-b border-gray-200 dark:border-[#2A2A2A] overflow-hidden transition-colors duration-300">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((set) => (
          <div key={set} className="flex items-center gap-8 pr-8">
            {services.map((service, i) => (
              <span key={`${set}-${i}`} className="flex items-center gap-8">
                <span
                  className={`text-4xl md:text-5xl font-extrabold uppercase tracking-tight whitespace-nowrap ${
                    i % 2 === 0 ? "text-gray-900 dark:text-white" : "text-stroke-outline opacity-70 dark:opacity-100"
                  }`}
                >
                  {service}
                </span>
                <span className="text-2xl text-[#00BFA6]">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
