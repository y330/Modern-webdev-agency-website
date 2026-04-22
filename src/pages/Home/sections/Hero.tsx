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
                    Empowering brands to make an impact.
                </motion.div>
                <motion.div
                    initial={{ translateY: "100%", opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}>
                    One immersive experience at a time.
                </motion.div>
            </h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}>
                I build premium, cinematic websites that elevate modern brands. Through a blend of high-end design and interactive engineering, I transform your vision into a digital reality.
            </motion.p>
            <motion.div
                initial={{ translateY: "200%", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}>
                <RouterLink
                    variant="primary"
                    to="/booking"
                    className="pulsating">
                    Chat With Me
                </RouterLink>
            </motion.div>
        </section>
    );
};

export default Hero;