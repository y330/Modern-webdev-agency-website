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
                We specialize in websites that make life easier, work more efficient, and missions more impactful
            </motion.h2>
            <div className="bottom">
                <motion.p
                    animate={controls}
                    transition={{ delay: 0.5 }}
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 }
                    }}>
                    We’re passionate about working on missions that serve people and create positive change. But whether your goal is impact or simply getting your business online, we’re here to help.
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