"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  id: number;
  institution: string;
  degree: string;
  location: string;
  period: string;
  grade: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className={`relative flex items-center ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          } mb-8`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div
            className={`w-5/12 ${
              index % 2 === 0 ? "text-right pr-4" : "text-left pl-4"
            }`}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {item.institution}
              </h3>
              <p className="text-primary dark:text-primary-400 font-medium mb-2">
                {item.degree}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {item.location}
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mb-2">
                {item.period}
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {item.grade}
              </p>
            </div>
          </div>

          {/* Timeline dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary dark:bg-primary-400 rounded-full"></div>
        </motion.div>
      ))}
    </div>
  );
} 