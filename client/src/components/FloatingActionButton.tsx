import { motion } from "framer-motion";

export default function FloatingActionButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
    >
      <a
        href="/attached_assets/Abhishek_kumar_singh_12204322_ General_cv.docx"
        download
        className="bg-primary dark:bg-primary-600 hover:bg-primary-700 dark:hover:bg-primary-700 text-white h-14 w-14 rounded-full flex items-center justify-center shadow-lg transition duration-300"
        title="Download CV"
        aria-label="Download CV"
      >
        <i className="fas fa-download text-xl"></i>
      </a>
    </motion.div>
  );
}
