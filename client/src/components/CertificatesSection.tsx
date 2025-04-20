import { motion } from "framer-motion";

export default function CertificatesSection() {
  const certificates = [
    {
      id: 1,
      title: "Cloud Computing",
      issuer: "NPTEL",
      period: "Jun 2024 - Dec 2024",
      icon: "fas fa-cloud",
    },
    {
      id: 2,
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera",
      period: "Aug 2024 - Oct 2024",
      icon: "fas fa-brain",
    },
    {
      id: 3,
      title: "Data Analysis with Tableau",
      issuer: "Coursera",
      period: "Jul 2024 - Sep 2024",
      icon: "fas fa-chart-pie",
    },
    {
      id: 4,
      title: "DSA Self Paced",
      issuer: "Geeks For Geeks",
      period: "Mar 2024 - May 2024",
      icon: "fas fa-code",
    },
    {
      id: 5,
      title: "Programming in C++: A Hands-on Introduction",
      issuer: "Coursera",
      period: "Nov 2023 - Feb 2024",
      icon: "fab fa-c",
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
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-4 mx-auto">
                <i className={`${certificate.icon} text-primary dark:text-primary-400 text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-2">{certificate.title}</h3>
              <p className="text-center text-primary dark:text-primary-400 mb-4">{certificate.issuer}</p>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-4">{certificate.period}</p>
              <div className="flex justify-center">
                <a href="#" className="text-primary dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
