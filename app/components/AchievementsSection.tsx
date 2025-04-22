"use client";

import { motion } from "framer-motion";

export default function AchievementsSection() {
  const achievements = [
    {
      id: 1,
      title: "Community Development Project",
      description:
        "Collaborated with an NGO to support elderly and underprivileged individuals, demonstrating compassion and social responsibility.",
      icon: "fas fa-hands-helping",
      badge: "2024",
      badgeColor: "bg-green-600",
    },
  ];

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
    <section
      id="achievements"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            Recognition and meaningful contributions beyond academics.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 w-20 h-20">
                <div
                  className={`absolute transform rotate-45 ${achievement.badgeColor} text-center text-white font-semibold py-1 right-[-40px] top-[16px] w-[170px]`}
                >
                  {achievement.badge}
                </div>
              </div>
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-4">
                <i
                  className={`${achievement.icon} text-primary dark:text-primary-400 text-2xl`}
                ></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
