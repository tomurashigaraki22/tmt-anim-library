import { motion } from "framer-motion";

const SlideIn = ({ children, direction = 'left', duration = 0.5, delay = 0, ...props }) => {
    const x = direction === 'left' ? '-100%' : '100%';

    return(
        <motion.div
            initial={{ x }}
            animate={{ x: 0 }}
            transition={{ duration, delay }}
            {...props}
        >
            {children}
        </motion.div>
    )
    
}

export default SlideIn;