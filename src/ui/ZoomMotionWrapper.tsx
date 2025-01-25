import { motion } from "framer-motion";
import { ReactNode } from "react";


export interface MotionWrapperProps {
    children: ReactNode; 
    className?: string;   
  }



export const ZoomMotionWrapper = ({children, className}:MotionWrapperProps) => {
    return (
      <motion.div
        className={className ?? ''}
        initial={{  scale: 1.2, opacity: 0 }}
        whileInView={{  scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
}