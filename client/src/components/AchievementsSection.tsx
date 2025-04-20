import { motion } from "framer-motion";

export default function AchievementsSection() {
  const achievements = [
    {
      id: 1,
      title: "Smart India Hackathon",
      description: "Participated in Smart India Hackathon (SIH) among 60+ teams in 40k+ students in University.",
      icon: "fas fa-laptop-code",
      badge: "2024",
      badgeColor: "bg-primary-600",
    },
    {
      id: 2,
      title: "Academic Excellence",
      description: "One among S1 top 40% students at University for good academic performance and extra-curricular activities.",
      icon: "fas fa-award",
      badge: "Top 40%",
      badgeColor: "bg-secondary-500",
    },
    {
      id: 3,
      title: "One India Cultural Festival",
      description: "Secured 2nd runner-up position among 25+ teams, competing against thousands of students from diverse backgrounds.",
      icon: "fas fa-trophy",
      badge: "2nd Runner-up",
      badgeColor: "bg-yellow-500",
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
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Recognition and accomplishments throughout my academic journey.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              className="bg-white p-6 rounded-xl shadow-md relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className={`absolute transform rotate-45 ${achievement.badgeColor} text-center text-white font-semibold py-1 right-[-40px] top-[16px] w-[170px]`}>
                  {achievement.badge}
                </div>
              </div>
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 mb-4">
                <i className={`${achievement.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
              <p className="text-gray-600 mb-4">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
