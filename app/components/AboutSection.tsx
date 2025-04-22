"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            I'm a Computer Science Engineering student with a passion for problem-solving and innovation.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm Aman Yadav, a Computer Science student at Lovely Professional University with a strong interest in full-stack development and problem-solving. I enjoy turning complex problems into simple, elegant solutions through code. Whether it's building a feature-rich e-commerce site or crafting a responsive movie platform, I aim to create meaningful digital experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
              With hands-on experience in C++, Java, PHP, and frameworks like React and Node.js, I’m constantly learning and improving. I also value collaboration, clear communication, and the impact of well-written code.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
              When I’m not coding, you’ll find me exploring new tech, contributing to community projects, or diving deeper into data structures and algorithms.
              </p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Personal Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-primary dark:text-primary-400 font-medium mb-2">Name</h4>
                  <p className="text-gray-600 dark:text-gray-400">Aman Yadav</p>
                </div>
                <div>
                  <h4 className="text-primary dark:text-primary-400 font-medium mb-2">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">amany31203@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-primary dark:text-primary-400 font-medium mb-2">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+91-8545007692</p>
                </div>
                <div>
                  <h4 className="text-primary dark:text-primary-400 font-medium mb-2">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Punjab, India</p>
                </div>
                <div>
                  <h4 className="text-primary dark:text-primary-400 font-medium mb-2">University</h4>
                  <p className="text-gray-600 dark:text-gray-400">Lovely Professional University</p>
                </div>
                <div>
                  <h4 className="text-primary dark:text-primary-400 font-medium mb-2">Degree</h4>
                  <p className="text-gray-600 dark:text-gray-400">B.Tech in Computer Science</p>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <a
                  href="http://www.linkedin.com/in/amany31203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300"
                >
                  <i className="fab fa-linkedin mr-2"></i> LinkedIn
                </a>
                <a
                  href="https://github.com/aman-yadavdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800 text-white px-4 py-2 rounded-md transition duration-300"
                >
                  <i className="fab fa-github mr-2"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
