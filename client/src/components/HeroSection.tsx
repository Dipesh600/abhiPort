import { motion } from "framer-motion";
import profile from "../assets/profile.svg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I'm <span className="text-primary dark:text-primary-400">Abhishek Kumar Singh</span>
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Computer Science Engineering Student
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              A passionate learner with interests in Machine Learning, Data Analysis, and Web Development.
              Currently pursuing B.Tech in Computer Science Engineering at Lovely Professional University.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-primary hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-primary dark:text-primary-400 font-medium py-3 px-6 rounded-md border border-primary dark:border-primary-400 transition duration-300"
              >
                View Projects
              </a>
              <a
                href="/attached_assets/Abhishek_kumar_singh_12204322_ General_cv.docx"
                download
                className="flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-md border border-gray-300 dark:border-gray-600 transition duration-300"
              >
                <i className="fas fa-download"></i> Download CV
              </a>
            </motion.div>
            <motion.div
              className="flex mt-8 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a
                href="https://linkedin.com/in/abhisheksingh124"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="https://github.com/AbhishekSingh6265"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="mailto:abhi6265kaushik@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="Email"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
              <a
                href="tel:+916265433095"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="Phone"
              >
                <i className="fas fa-phone-alt text-2xl"></i>
              </a>
            </motion.div>
          </div>
          <motion.div
            className="mt-12 md:mt-0 md:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="relative max-w-md mx-auto">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full p-3">
                  <img
                    src={profile}
                    alt="Abhishek Kumar Singh"
                    className="rounded-full h-64 w-64 md:h-80 md:w-80 object-cover shadow-inner"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary-500 dark:bg-secondary-600 text-white p-4 rounded-full shadow-lg">
                <i className="fas fa-code text-3xl"></i>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
