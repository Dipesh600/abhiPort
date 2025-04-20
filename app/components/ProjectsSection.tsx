"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const projects = [
    {
      id: "project1",
      title: "Machine Learning-Based Breast Cancer Diagnosis",
      period: "Oct 2024 - Nov 2024",
      tags: ["R", "Machine Learning", "Data Analysis"],
      description:
        "Analyzed breast cell biopsy images using various machine learning algorithms to classify tumors as malignant or benign for early and accurate cancer detection.",
      icon: "fas fa-microscope",
      gradientFrom: "from-primary-500",
      gradientTo: "to-secondary-500",
      fullDescription:
        "This project focused on using machine learning algorithms to analyze breast cell biopsy images for cancer diagnosis. By extracting features such as size, shape, and texture of cell nuclei, we were able to classify tumors as malignant or benign.",
      features: [
        "Feature extraction from breast cell biopsy images",
        "Implementation of multiple machine learning algorithms (KNN, Naïve Bayes, Decision Trees)",
        "Regression models for prediction",
        "KNN Clustering for pattern identification",
        "Neural Networks for complex classification",
        "Performance evaluation using metrics like accuracy, precision, recall, and F1-score",
      ],
      technologies: ["R Programming", "Machine Learning", "Data Analysis", "Statistical Modeling"],
      outcome:
        "The project contributed to early and more accurate cancer detection by optimizing model performance through comprehensive evaluation of different metrics. The findings highlighted the effectiveness of machine learning in medical diagnostics.",
    },
    {
      id: "project2",
      title: "Sales Analytics Dashboard in Tableau",
      period: "Aug 2024 - Sept 2024",
      tags: ["Tableau", "Data Visualization", "Analytics"],
      description:
        "Developed an interactive Tableau dashboard to track sales metrics across various dimensions, providing real-time visual insights for business decision-making.",
      icon: "fas fa-chart-bar",
      gradientFrom: "from-blue-500",
      gradientTo: "to-purple-500",
      fullDescription:
        "This project involved developing an interactive Tableau dashboard to track sales, profit, discount, and quantity trends across various dimensions such as region, category, and customer segment.",
      features: [
        "Interactive visualization of sales data across multiple dimensions",
        "Data integration and cleaning for accurate analysis",
        "Real-time KPIs and metrics tracking",
        "Customizable filters for detailed exploration",
        "Identification of top-performing products and high-revenue regions",
        "Trend analysis for business decision support",
      ],
      technologies: ["Tableau", "Data Visualization", "Business Intelligence", "Data Analysis"],
      outcome:
        "The dashboard enabled stakeholders to make data-driven decisions by providing visual insights into sales performance. The project demonstrated how effective data visualization can transform raw sales data into actionable business intelligence.",
    },
    {
      id: "project3",
      title: "LEAF Association Website",
      period: "Aug 2022 - Nov 2022",
      tags: ["HTML", "CSS", "JavaScript"],
      description:
        "Developed a responsive website for a hypothetical NGO using HTML, CSS, and JavaScript with a user-friendly interface and interactive features.",
      icon: "fas fa-leaf",
      gradientFrom: "from-green-500",
      gradientTo: "to-teal-500",
      fullDescription:
        "This project involved developing a responsive and interactive website for LEAF Association, a hypothetical NGO, using HTML, CSS, and JavaScript. The website provided details about the organization's mission, activities, and contribution opportunities.",
      features: [
        "Responsive design for optimal viewing on all devices",
        "User-friendly navigation and interface",
        "Interactive elements to enhance user engagement",
        "Information about the NGO's mission and activities",
        "Contribution and volunteer sign-up options",
        "Contact and social media integration",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "GitHub"],
      outcome:
        "The project successfully demonstrated my ability to create an engaging and functional website from scratch. It showcased my skills in front-end development, UI/UX design, and version control using GitHub.",
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
