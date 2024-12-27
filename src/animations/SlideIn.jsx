// src/animations/SlideIn.js
import { motion } from "framer-motion";
import { useAnimationOnView } from "../hooks/useAnimationOnView";

const SlideIn = ({ children, direction = 'left', duration = 0.5, delay = 0, ...props }) => {
  const { ref, isInView } = useAnimationOnView();

  const x = direction === 'left' ? '-100%' : '100%';

  return (
    <motion.div
      ref={ref}
      initial={{ x }}
      animate={isInView ? { x: 0 } : { x }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
