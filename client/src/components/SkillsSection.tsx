import { motion } from "framer-motion";
import ProgressBar from "./ui/progress-bar";

export default function SkillsSection() {
  const technicalSkills = [
    { name: "C++", level: 90, proficiency: "Advanced" },
    { name: "Java", level: 75, proficiency: "Intermediate" },
    { name: "C", level: 85, proficiency: "Advanced" },
    { name: "HTML & CSS", level: 80, proficiency: "Intermediate" },
    { name: "MySQL", level: 70, proficiency: "Intermediate" },
    { name: "R", level: 65, proficiency: "Intermediate" },
    { name: "Tableau", level: 75, proficiency: "Intermediate" },
    { name: "MS Excel", level: 80, proficiency: "Intermediate" },
  ];

  const softSkills = [
    { name: "Problem-Solving", icon: "fas fa-lightbulb" },
    { name: "Team Player", icon: "fas fa-users" },
    { name: "Project Management", icon: "fas fa-tasks" },
    { name: "Adaptability", icon: "fas fa-sync-alt" },
  ];

  const interests = [
    "Machine Learning",
    "Data Analysis",
    "Algorithm Design",
    "Web Development",
    "Cloud Computing",
    "Programming",
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            A showcase of my technical abilities and professional competencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <motion.div
            className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Technical Skills</h3>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.proficiency}</span>
                  </div>
                  <ProgressBar percentage={skill.level} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills & Areas of Interest */}
          <div className="space-y-10">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg flex items-center"
                    variants={itemVariants}
                  >
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                      <i className={`${skill.icon} text-primary`}></i>
                    </div>
                    <span className="font-medium text-gray-700">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-md"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Areas of Interest</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-medium"
                    variants={itemVariants}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
