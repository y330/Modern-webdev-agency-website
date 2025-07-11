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
                World Peace Web Services helps trades and service-based businesses in the GTA grow online with purpose and impact.
            </motion.h2>
            <div className="bottom">
                <motion.p
                    animate={controls}
                    transition={{ delay: 0.5 }}
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 }
                    }}>
                    We craft tailored websites designed to boost your presence on Google Maps and help your business stand out in your local community.
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