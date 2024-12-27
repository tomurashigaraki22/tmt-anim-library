// src/animations/Bounce.js
import { motion } from 'framer-motion';
import { useAnimationOnView } from '../hooks/useAnimationOnView';

const Bounce = ({ children, duration = 0.5, ...props }) => {
  const { ref, isInView } = useAnimationOnView();

  return (
    <motion.div
      ref={ref}
      initial={{ y: '0%' }}
      animate={
        isInView
          ? {
              y: ['0%', '-10%', '0%'], // keyframes for bouncing
            }
          : { y: '0%' } // Reset position when out of view
      }
      transition={{ duration, repeat: isInView ? Infinity : 0, repeatType: 'reverse' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Bounce;
