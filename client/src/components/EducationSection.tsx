import { motion } from "framer-motion";
import Timeline from "./ui/timeline";

export default function EducationSection() {
  const educationItems = [
    {
      id: 1,
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      location: "Punjab, India",
      period: "Since August 2022",
      grade: "CGPA: 6.34",
    },
    {
      id: 2,
      institution: "A.S.R.L.S. College",
      degree: "Intermediate",
      location: "Nabiganjbazar, Siwan",
      period: "April 2019 - March 2021",
      grade: "Percentage: 74.89%",
    },
    {
      id: 3,
      institution: "S.S Public School",
      degree: "Matriculation",
      location: "Baikunthpur, Gopalganj",
      period: "April 2018 - March 2019",
      grade: "Percentage: 64.6%",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            My academic journey and educational background.
          </p>
        </motion.div>

        <Timeline items={educationItems} />
      </div>
    </section>
  );
}
