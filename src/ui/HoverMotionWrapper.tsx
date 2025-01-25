import { motion } from "framer-motion";
import { MotionWrapperProps } from "./ZoomMotionWrapper";


export const HoverMotionWrapper = ({children, className}:MotionWrapperProps) => {
  return (
    <motion.div
      className={className ?? ''}
      whileHover={{ scale: 1.05 }}
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}