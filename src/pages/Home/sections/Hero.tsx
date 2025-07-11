import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { RouterLink } from "../../../components";

const Hero = () => {
    const blob = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.addEventListener("mousemove", e => {
            if (!blob.current) return;
            blob.current.animate(
                {
                    left: `${e.pageX}px`,
                    top: `${Math.min(e.pageY + document.body.scrollTop, screen.height)}px`
                },
                { duration: 3000, easing: "ease-in-out", fill: "forwards" }
            );
        });
    }, []);

    return (
        <section className="hero">
            <div
                ref={blob}
                className="mouse-follow"></div>
            <div className="animated-blob"></div>
            <h1>
                <motion.div
                    initial={{ translateY: "100%", opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}>
                    Empowering trades.
                </motion.div>
                <motion.div
                    initial={{ translateY: "100%", opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}>
                    Advancing peace.
                </motion.div>
                <motion.div
                    initial={{ translateY: "100%", opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}>
                    One website at a time.
                </motion.div>
            </h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}>
                Today, we help trades and service professionals build an online presence. Tomorrow, we help community-focused missions do the same.
            </motion.p>
            <motion.div
                initial={{ translateY: "200%", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}>
                <RouterLink
                    variant="primary"
                    to="/contact"
                    className="pulsating">
                    Get Started
                </RouterLink>
            </motion.div>
        </section>
    );
};

export default Hero;