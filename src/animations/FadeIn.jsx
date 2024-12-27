// src/animations/FadeIn.js
import { motion } from "framer-motion";
import { useAnimationOnView } from "../hooks/useAnimationOnView";

const FadeIn = ({ children, duration = 0.5, delay = 0, ...props }) => {
  const { ref, isInView } = useAnimationOnView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
