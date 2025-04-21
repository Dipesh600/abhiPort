"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CertificatesSection() {
  const certificates = [
    {
      id: 1,
      title: "Cloud Computing",
      issuer: "NPTEL",
      period: "Jun 2024 - Dec 2024",
      icon: "fas fa-cloud",
      status: "In Progress",
      image: "/assets/fundamentals.jpeg"
    },
    {
      id: 2,
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera",
      period: "Aug 2024",
      icon: "fas fa-brain",
      link: "https://coursera.org/verify/Y08PQ1UBLXMF",
      image: "/assets/mlm.jpeg"
    },
    {
      id: 3,
      title: "Data Analysis with Tableau",
      issuer: "Coursera",
      period: "Feb 2023",
      icon: "fas fa-chart-pie",
      link: "https://coursera.org/verify/4PXU84YPFGA5",
      image: "/assets/fundamentals.jpeg"
    },
    {
      id: 4,
      title: "DSA Self Paced",
      issuer: "Geeks For Geeks",
      period: "Mar 2024",
      icon: "fas fa-code",
      link: "https://media.geeksforgeeks.org/courses/certificates/86498fbe80b836a1bb15c9b7d7c0a0a9.pdf",
      image: "/assets/gfg.jpg"
    },
    {
      id: 5,
      title: "Programming in C++: A Hands-on Introduction",
      issuer: "Coursera",
      period: "Nov 2023",
      icon: "fab fa-c",
      link: "https://www.coursera.org/account/accomplishments/specialization/YBAC663PLLTJ",
      image: "/assets/c++.jpeg"
    },
    {
      id: 6,
      title: "Community Development Project",
      issuer: "Shishtinant Social Welfare Foundation",
      period: "2023",
      icon: "fas fa-hands-helping",
      image: "/assets/community_certificate.jpeg",
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
              {certificate.status === "In Progress" ? (
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-clock text-4xl text-primary dark:text-primary-400 mb-2"></i>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Certificate in Progress</p>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={certificate.image}
                    alt={`${certificate.title} Certificate`}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-2">{certificate.title}</h3>
              <p className="text-center text-primary dark:text-primary-400 mb-2">{certificate.issuer}</p>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-4">{certificate.period}</p>
              
              <div className="flex justify-center">
                {certificate.status ? (
                  <span className="text-yellow-500 dark:text-yellow-400 font-medium">
                    {certificate.status}
                  </span>
                ) : certificate.link ? (
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
