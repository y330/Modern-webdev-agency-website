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
                Faith is taking the first step even when you don't see the whole staircase.
            </motion.span>
            <motion.span
                animate={controls}
                transition={{ delay: 0.6 }}
                variants={{
                    visible: { opacity: 1, translateY: 0 },
                    hidden: { opacity: 0, translateY: "100%" }
                }}
                className="author">
                – Martin Luther King Jr.
            </motion.span>
        </section>
    );
};

export default Testimony;