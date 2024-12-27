import { motion } from "framer-motion";

const FadeIn = ({ children, duration = 0.5, delay = 0, ...props }) => {
    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration, delay }}
            {...props}>
                {children}
            </motion.div>
    )
    
}

export default FadeIn;