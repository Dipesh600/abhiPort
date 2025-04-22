"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const projects = [
    {
      id: "project1",
      title: "Movie Website",
      period: "Nov 2024",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description:
        "Created a dynamic movie website offering trailers, reviews, and latest film updates with a clean UI.",
      icon: "fas fa-film",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500",
      fullDescription:
        "Developed and managed a movie-centric website where users could explore trailers, reviews, and behind-the-scenes content. Focused on delivering a seamless, visually appealing, and responsive user experience.",
      features: [
        "Real-time movie updates and trailers",
        "User-friendly, responsive interface",
        "Showcased reviews and behind-the-scenes content",
        "Clean UI with Bootstrap components",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      outcome:
        "Enhanced user engagement through intuitive design and up-to-date content delivery, showcasing front-end proficiency.",
    },
    {
      id: "project2",
      title: "E-commerce Website",
      period: "Oct 2024",
      tags: ["PHP", "JavaScript", "MySQL"],
      description:
        "Built a PHP-based e-commerce site that improved sales and supported full shopping and user account features.",
      icon: "fas fa-shopping-cart",
      gradientFrom: "from-orange-500",
      gradientTo: "to-yellow-500",
      fullDescription:
        "Designed and developed a complete e-commerce platform with product management, secure checkout, and customer accounts. Led all development stages from planning to deployment.",
      features: [
        "Product catalog with dynamic management",
        "Secure login and checkout flow",
        "Order processing and tracking",
        "User account creation and management",
        "Backend integration using MySQL",
      ],
      technologies: ["PHP", "JavaScript", "MySQL"],
      outcome:
        "Boosted client’s online sales by 20% in the first quarter, demonstrating backend and full-stack development skills.",
    },
    {
      id: "project3",
      title: "Electronic Dice",
      period: "Aug 2024",
      tags: ["Python", "Arduino Uno"],
      description:
        "Built a digital dice using Arduino with LED display and randomized outcomes for gaming and simulations.",
      icon: "fas fa-dice",
      gradientFrom: "from-blue-500",
      gradientTo: "to-indigo-500",
      fullDescription:
        "Designed an electronic dice using a microcontroller and LED display, simulating dice rolls with sound and visual effects. It demonstrated real-time input handling and random number generation.",
      features: [
        "Randomized number generation for dice rolls",
        "LED/seven-segment display output",
        "Button input for physical interaction",
        "Basic sound/visual feedback features",
      ],
      technologies: ["Python", "Arduino Uno"],
      outcome:
        "Provided a functional and educational electronic dice model, reflecting embedded system programming and prototyping skills.",
    },
  ];
  

  const openModal = (id: string) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${activeModal ? styles['blur-background'] : ''}`}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
            <div className="w-20 h-1 bg-primary dark:bg-primary-400 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              A collection of my recent work showcasing my technical skills and problem-solving abilities.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                variants={itemVariants}
              >
                <div
                  className={`h-48 bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} relative`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i className={`${project.icon} text-white text-5xl`}></i>
                  </div>
                  <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300">
                    {project.period}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="mt-4">
                    <button
                      className="text-primary dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center"
                      onClick={() => openModal(project.id)}
                    >
                      View Details <i className="fas fa-chevron-right ml-2 text-sm"></i>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Project Modals */}
      {projects.map((project) => (
        <ProjectModal
          key={project.id}
          isOpen={activeModal === project.id}
          onClose={closeModal}
          project={project}
        />
      ))}
    </section>
  );
}
