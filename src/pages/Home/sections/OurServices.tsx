import { motion } from "framer-motion";
import { useRef } from "react";
import { VisibleControls } from "../../../hooks";
import { 
    MdBrush, 
    MdRocketLaunch, 
    MdAutoAwesome, 
    MdVideocam, 
    MdDevices, 
    MdOutlineMotionPhotosOn, 
    MdInterests, 
    MdPalette, 
    MdSearch 
} from "react-icons/md";

const Capabilities = () => {
    const ref = useRef<HTMLElement>(null);
    const controls = VisibleControls(ref);

    return (
        <section className="capabilities-section" ref={ref}>
            <div className="container">
                <div className="main-feature">
                    <motion.div 
                        className="text-content"
                        animate={controls}
                        transition={{ delay: 0.2 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: "20px" }
                        }}
                    >
                        <h2>My Expertise</h2>
                        <h3>Cinematic Web Experiences</h3>
                        <p>
                            I engineer immersive, interactive digital landscapes that harmonize high-end design with fluid, cinematic motion. My focus is on sensory storytelling and architectural aesthetics that redefine brand identities.
                        </p>
                        <ul className="feature-list">
                            <li><MdBrush /> Art Direction</li>
                            <li><MdDevices /> UI/UX Design</li>
                            <li><MdOutlineMotionPhotosOn /> Motion Graphics</li>
                            <li><MdInterests /> Interactive Design</li>
                            <li><MdPalette /> Brand Identity</li>
                            <li><MdSearch /> SEO Optimization</li>
                        </ul>
                    </motion.div>
                    <motion.div 
                        className="visual"
                        animate={controls}
                        transition={{ delay: 0.4 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0.95 }
                        }}
                    >
                        <motion.div 
                            className="icon-wrapper"
                            animate={{ 
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <MdVideocam />
                        </motion.div>
                    </motion.div>
                </div>

                <div className="secondary-features">
                    <motion.div 
                        className="sub-card"
                        animate={controls}
                        transition={{ delay: 0.6 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: "20px" }
                        }}
                    >
                        <div className="icon-box">
                            <MdRocketLaunch />
                        </div>
                        <h4>Digital Products</h4>
                        <p>Bespoke digital ecosystems and high-performance platforms engineered for infinite scalability and refined user engagement.</p>
                    </motion.div>

                    <motion.div 
                        className="sub-card"
                        animate={controls}
                        transition={{ delay: 0.8 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: "20px" }
                        }}
                    >
                        <div className="icon-box">
                            <MdAutoAwesome />
                        </div>
                        <h4>AI Integration</h4>
                        <p>Advanced cognitive systems and specialized LLM architectures designed to optimize digital intelligence and operational fluidty.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
