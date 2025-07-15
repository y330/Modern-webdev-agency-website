import { motion } from "framer-motion";
import { useRef } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { VisibleControls } from "../../../hooks";

const Testimony = () => {
    const ref = useRef(null);
    const controls = VisibleControls(ref);

    return (
        <section
            ref={ref}
            className="testimony">
            <motion.div
                animate={controls}
                transition={{ delay: 0.2 }}
                variants={{
                    visible: { opacity: 1, translateY: 0 },
                    hidden: { opacity: 0, translateY: "100%" }
                }}>
                <RiDoubleQuotesL className="icon" />
            </motion.div>
            <motion.span
                animate={controls}
                transition={{ delay: 0.4 }}
                variants={{
                    visible: { opacity: 1, translateY: 0 },
                    hidden: { opacity: 0, translateY: "100%" }
                }}
                className="quote">
                The best way to find yourself is to lose yourself in the service of others. World Peace Web Services embodies this philosophy, helping businesses thrive online while making a positive impact in their communities. Book a call with them today!
            </motion.span>
            <motion.span
                animate={controls}
                transition={{ delay: 0.6 }}
                variants={{
                    visible: { opacity: 1, translateY: 0 },
                    hidden: { opacity: 0, translateY: "100%" }
                }}
                className="author">
                – Ghandi
            </motion.span>
        </section>
    );
};

export default Testimony;