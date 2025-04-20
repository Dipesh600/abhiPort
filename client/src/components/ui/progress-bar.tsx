import { motion } from "framer-motion";

interface ProgressBarProps {
  percentage: number;
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-primary dark:bg-primary-400 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}
