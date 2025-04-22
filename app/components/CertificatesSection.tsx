"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CertificatesSection() {
    const certificates = [
      {
        id: 1,
        title: "Dynamic Programming",
        issuer: "Coursera",
        period: "Apr 5, 2024",
        icon: "fas fa-project-diagram",
        link: "https://coursera.org/verify/Q7ZW5LR6Z27R",
        image: "/assets/dynamicProgramming.jpg"
      },
      {
        id: 2,
        title: "Server side JavaScript with Node.js",
        issuer: "Coursera",
        period: "Apr 24, 2024",
        icon: "fas fa-server",
        link: "https://coursera.org/verify/TJB3E64BSZ73",
        image: "/assets/serverSideJavaScript.jpg"
      },
      {
        id: 3,
        title: "Build AI Apps with ChatGPT, Dall-E, and GPT-4",
        issuer: "Coursera",
        period: "Apr 23, 2024",
        icon: "fas fa-robot",
        link: "https://coursera.org/verify/BEVS7564CT4P",
        image: "/assets/buildAIApps.jpg"
      },
      {
        id: 4,
        title: "DSA Self PacedMastering Data Structures and Algorithms using C a n d C++",
        issuer: "Udemy",
        period: "Nov 24, 2023",
        icon: "fas fa-code",
        link: "https://www.udemy.com/certificate/UC-743e83d8-Of3f-4ad4-bd76-027fb11d8d13/",
        image: "/assets/MasteringDSA.jpg"
      },
    ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            Certifications and courses I've completed to enhance my skills.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
              variants={itemVariants}
            >
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} Certificate`}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-2">{certificate.title}</h3>
              <p className="text-center text-primary dark:text-primary-400 mb-2">{certificate.issuer}</p>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-4">{certificate.period}</p>
              
              <div className="flex justify-center">
                {certificate.link ? (
                  <a 
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium inline-flex items-center gap-2"
                  >
                    View Certificate <i className="fas fa-external-link-alt text-sm"></i>
                  </a>
                ) : (
                  <a 
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-primary hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 font-medium rounded-lg px-4 py-2 inline-flex items-center gap-2 transition-colors"
                  >
                    View Certificate <i className="fas fa-external-link-alt text-sm"></i>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
