import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const IntersectionObserverAnimation = ({ triggerOnce, rootMarginBotton, Customvariants, children }) => {
    const [ref, inView] = useInView({
        triggerOnce: triggerOnce || false,
        threshold: 0,
        rootMargin: `0px 0px ${rootMarginBotton || "0px"} 0px`
    })


    return (
        <motion.div ref={ref}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            exit="hidden"
            variants={Customvariants}
        >
            {children}
        </motion.div>
    )
}

export default IntersectionObserverAnimation
