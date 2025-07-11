import { motion } from "framer-motion";
import { useRef } from "react";
import { RouterLink } from "../../../components";
import { VisibleControls } from "../../../hooks";

const QuickContact = () => {
    const ref = useRef(null);
    const controls = VisibleControls(ref);

    return (
        <section
            ref={ref}
            className="contact"
            id="contact">
            <h2>Contact</h2>
            <h3>
                <motion.div
                    animate={controls}
                    transition={{ delay: 0.2 }}
                    variants={{
                        visible: { opacity: 1, translateY: 0 },
                        hidden: { opacity: 0, translateY: "200%" }
                    }}>
                    Interested?
                </motion.div>
                <motion.div
                    animate={controls}
                    transition={{ delay: 0.4 }}
                    variants={{
                        visible: { opacity: 1, translateY: 0 },
                        hidden: { opacity: 0, translateY: "200%" }
                    }}>
                    Send us a message
                </motion.div>
            </h3>
            <motion.div
                animate={controls}
                transition={{ delay: 1 }}
                variants={{
                    visible: { opacity: 1, translateY: 0 },
                    hidden: { opacity: 0, translateY: "200%" }
                }}>
                <RouterLink
                    variant="primary"
                    to="/contact"
                    className="pulsating">
                    Contact Us
                </RouterLink>
            </motion.div>
        </section>
    );
};

export default QuickContact;