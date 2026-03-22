"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: "1+", label: "Years Experience" },
  { number: "20+", label: "Projects Completed" },
  { number: "10+", label: "Happy Clients" },
  { number: "90%", label: "Client Satisfaction" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30" />
              <div className="relative bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden aspect-[4/5]">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg
                    className="w-32 h-32"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              I&apos;m a passionate full-stack developer with over 1 years of experience
              creating modern web applications. I specialize in building scalable
              solutions using cutting-edge technologies.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              My journey in web development started with a curiosity for how things
              work on the internet. Today, I help businesses transform their ideas
              into reality through clean code and intuitive design. I believe in
              writing maintainable code and creating user experiences that matter.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl transition-all duration-500 hover:shadow-lg`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
