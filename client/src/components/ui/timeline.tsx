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
    <div className="relative timeline max-w-3xl mx-auto pl-8">
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
      
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className="relative pb-12 last:pb-0"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-1.5"></div>
          <div className="bg-white p-6 rounded-xl shadow-md ml-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{item.institution}</h3>
                <p className="text-primary font-medium">{item.degree}</p>
                <p className="text-gray-600 mt-1">{item.location}</p>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded">
                  {item.period}
                </span>
                <p className="text-gray-600 mt-2">{item.grade}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
