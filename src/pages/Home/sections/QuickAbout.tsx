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
                I specialize in cinematic web experiences that help brands stand out.
            </motion.h2>
            <div className="bottom">
                <motion.p
                    animate={controls}
                    transition={{ delay: 0.5 }}
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 }
                    }}>
                    I combine high-end design with technical engineering to create websites that don't just exist, they captivate. From cinematic visual systems to complex web platforms, I am dedicated to delivering digital excellence and aesthetic precision.
                </motion.p>
                <RouterLink
                    variant="link"
                    to="/about"
                    arrow>
                    Learn more about me
                </RouterLink>
            </div>
        </section>
    );
};
export default AboutHighlight;