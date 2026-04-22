import { motion } from "framer-motion";
import { useRef } from "react";
import { Checkmark, Clock, LocationPin, RouterLink } from "../../../components";
import { VisibleControls } from "../../../hooks";

const WhyUs = () => {
    const topRef = useRef<HTMLElement>(null);
    const topControls = VisibleControls(topRef);

    const midRef = useRef<HTMLDivElement>(null);
    const midControls = VisibleControls(midRef);

    const bottomRef = useRef<HTMLDivElement>(null);
    const bottomControls = VisibleControls(bottomRef);

    return (
        <section
            ref={topRef}
            className="whyus">
            <motion.h2
                animate={topControls}
                transition={{ delay: 0.2 }}
                variants={{
                    visible: { opacity: 1, translateY: 0 },
                    hidden: { opacity: 0, translateY: "100%" }
                }}>
                Why Choose Me?
            </motion.h2>
            <motion.p
                animate={topControls}
                transition={{ delay: 0.5 }}
                variants={{
                    visible: { opacity: 1, translateY: 0 },
                    hidden: { opacity: 0, translateY: "100%" }
                }}>
                Experience an unparalleled fusion of technical mastery and 
                <br /> aesthetic precision that commands the digital landscape.
            </motion.p>
            <div
                ref={midRef}
                className="grid">
                <div className="item">
                    <motion.div
                        animate={midControls}
                        transition={{ delay: 0.2 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: "100%" }
                        }}>
                        <Checkmark />
                    </motion.div>
                    <motion.h3
                        animate={midControls}
                        transition={{ delay: 0.4 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: "100%" }
                        }}>
                        Mastery
                    </motion.h3>
                    <motion.p
                        animate={midControls}
                        transition={{ delay: 0.6 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: "100%" }
                        }}>
                        I deliver world-class digital artifacts with a relentless focus on uncompromising quality and cinematic architectural detail.
                    </motion.p>
                </div>
                <div className="item">
                    <motion.div
                        animate={midControls}
                        transition={{ delay: 0.2 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: "100%" }
                        }}>
                        <Clock />
                    </motion.div>
                    <motion.h3
                        animate={midControls}
                        transition={{ delay: 0.6 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: "100%" }
                        }}>
                        Velocity
                    </motion.h3>
                    <motion.p
                        animate={midControls}
                        transition={{ delay: 0.8 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: "100%" }
                        }}>
                        I work efficiently to deliver top-notch projects within days on average.
                    </motion.p>
                </div>
                <div className="item">
                    <motion.div
                        animate={midControls}
                        transition={{ delay: 0.2 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: "100%" }
                        }}>
                        <LocationPin />
                    </motion.div>
                    <motion.h3
                        animate={midControls}
                        transition={{ delay: 0.8 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: "100%" }
                        }}>
                        Avant-Garde
                    </motion.h3>
                    <motion.p
                        animate={midControls}
                        transition={{ delay: 1 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: "100%" }
                        }}>
                        Based in Downtown Toronto, I architect future-forward digital experiences that redefine industry standards and elevate brand presence.
                    </motion.p>
                </div>
            </div>
            <div
                ref={bottomRef}
                className="next-step">
                <motion.h3
                    animate={bottomControls}
                    transition={{ delay: 0.8 }}
                    variants={{
                        visible: { opacity: 1, translateY: 0 },
                        hidden: { opacity: 0, translateY: "100%" }
                    }}>
                    Ready to take the next step?
                </motion.h3>
                <motion.div
                    animate={bottomControls}
                    transition={{ delay: 1 }}
                    variants={{
                        visible: { opacity: 1, translateY: 0 },
                        hidden: { opacity: 0, translateY: "100%" }
                    }}>
                    <RouterLink
                        to="/booking"
                        variant="white">
                        Chat With Me
                    </RouterLink>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUs;