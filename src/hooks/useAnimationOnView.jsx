import { useInView } from "framer-motion";
import { useRef } from "react";

export const useAnimationOnView = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); //Triggers animation only once when in view
    return { ref, isInView }
}