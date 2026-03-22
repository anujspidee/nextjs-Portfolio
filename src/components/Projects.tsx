"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.",
    image: "/project1.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team workspaces.",
    image: "/project2.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "AI-powered content creation tool that helps writers generate blog posts, social media content, and more.",
    image: "/project3.jpg",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 4,
    title: "Portfolio Dashboard",
    description: "Interactive dashboard for tracking investments, visualizing data with charts, and real-time market updates.",
    image: "/project4.jpg",
    tags: ["Vue.js", "D3.js", "Firebase", "Tailwind"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description: "Analytics platform for social media managers to track engagement, growth, and audience insights.",
    image: "/project5.jpg",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "Redis"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "Mobile-first fitness app with workout tracking, nutrition logging, and progress visualization.",
    image: "/project6.jpg",
    tags: ["React Native", "Node.js", "AWS", "DynamoDB"],
    demoLink: "#",
    codeLink: "#",
  },
];

export default function Projects() {
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
      id="projects"
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge
            and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white/50">
                  <svg
                    className="w-16 h-16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Link
                    href={project.demoLink}
                    className="px-4 py-2 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href={project.codeLink}
                    className="px-4 py-2 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    View Code
                  </Link>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
          >
            View All Projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
