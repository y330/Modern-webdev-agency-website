import { motion } from "framer-motion";
import { useRef } from "react";
import { RouterLink } from "../../../components";
import { VisibleControls } from "../../../hooks";

const AboutHighlight = () => {
    const ref = useRef<HTMLElement>(null);
    const controls = VisibleControls(ref);

    return (
        <section
            ref={ref}
            className="help">
            <motion.h2
                animate={controls}
                transition={{ delay: 0.2 }}
                variants={{
                    visible: { opacity: 1, translateX: 0 },
                    hidden: { opacity: 0, translateX: "-50%" }
                }}>
                We specialize in immersive digital experiences that elevate modern brands.
            </motion.h2>
            <div className="bottom">
                <motion.p
                    animate={controls}
                    transition={{ delay: 0.5 }}
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 }
                    }}>
                    We blend high-end design with interactive engineering to create websites that don't just exist — they inspire. From cinematic portfolios to complex web applications, we are committed to delivering digital excellence.
                </motion.p>
                <RouterLink
                    variant="link"
                    to="/about"
                    arrow>
                    Learn more about us
                </RouterLink>
            </div>
        </section>
    );
};
export default AboutHighlight;