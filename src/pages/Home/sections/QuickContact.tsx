import { motion } from "framer-motion";
import { useRef } from "react";
import { RouterLink } from "../../../components";
import { VisibleControls } from "../../../hooks";

const QuickGetStarted = () => {
    const ref = useRef(null);
    const controls = VisibleControls(ref);

    return (
        <section
            ref={ref}
            className="contact"
            id="get-started">
            <h2>Get Started</h2>
            <h3>
                <motion.div
                    animate={controls}
                    transition={{ delay: 0.2 }}
                    variants={{
                        visible: { opacity: 1, translateY: 0 },
                        hidden: { opacity: 0, translateY: "200%" }
                    }}>
                    Ready to grow?
                </motion.div>
                <motion.div
                    animate={controls}
                    transition={{ delay: 0.4 }}
                    variants={{
                        visible: { opacity: 1, translateY: 0 },
                        hidden: { opacity: 0, translateY: "200%" }
                    }}>
                    Start your journey with us!
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
                    to="/booking"
                    className="pulsating">
                    Book a Call
                </RouterLink>
            </motion.div>
        </section>
    );
};

export default QuickGetStarted;