// src/animations/Bounce.js
import { motion } from 'framer-motion';

const Bounce = ({ children, duration = 0.5, ...props }) => {
  return (
    <motion.div
      animate={{
        y: ['0%', '-10%', '0%'], // keyframes for bouncing
      }}
      transition={{ duration, repeat: Infinity, repeatType: 'reverse' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Bounce;
