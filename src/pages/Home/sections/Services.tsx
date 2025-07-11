import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight, MdDesignServices, MdCode, MdDeveloperMode } from "react-icons/md";
import { Button } from "../../../components";
import { VisibleControls } from "../../../hooks";

const Services = () => {
    const ref = useRef<HTMLUListElement>(null);
    const controls = VisibleControls(ref);
    const [serviceIndex, setServiceIndex] = useState(0);

    useEffect(() => {
        if (!ref.current || ref.current.children.length === 0) return;
        ref.current.scrollTo({
            left: ref.current.children[0].clientWidth * serviceIndex,
            behavior: "smooth"
        });
    }, [serviceIndex]);

    return (
        <section
            className="services"
            id="services">
            <div className="text">
                <h2>Our Services</h2>
                <h3>
                    Boost your business
                    <br /> with our solutions
                </h3>
            </div>
            <ul className="options">
                <li className="option">
                    <Button
                        variant="choice"
                        className={serviceIndex === 0 ? "active" : ""}
                        onClick={() => setServiceIndex(0)}>
                        Trade/Service
                    </Button>
                </li>
                <li className="option">
                    <Button
                        variant="choice"
                        className={serviceIndex === 1 ? "active" : ""}
                        onClick={() => setServiceIndex(1)}>
                        E-commerce
                    </Button>
                </li>
                <li className="option">
                    <Button
                        variant="choice"
                        className={serviceIndex === 2 ? "active" : ""}
                        onClick={() => setServiceIndex(2)}>
                        Social Media
                    </Button>
                </li>
                <li className="buttons">
                    <button
                        aria-label="Previous service"
                        disabled={serviceIndex <= 0}
                        onClick={() => setServiceIndex(index => index - 1)}>
                        <MdChevronLeft />
                    </button>
                    <button
                        aria-label="Next service"
                        disabled={serviceIndex >= 2}
                        onClick={() => setServiceIndex(index => index + 1)}>
                        <MdChevronRight />
                    </button>
                </li>
            </ul>
            <ul
                ref={ref}
                className="cards">
                <motion.li
                    className="card"
                    animate={controls}
                    transition={{ delay: 0.2 }}
                    variants={{
                        visible: { opacity: 1, scaleX: 1 },
                        hidden: { opacity: 0, scaleX: 0 }
                    }}>
                    <div className="top">
                        <div className="icon">
                            <MdDesignServices />
                        </div>
                        <h4>Trade/Service</h4>
                    </div>
                    <p>
                        We build custom websites for trades and service businesses that are easy to navigate, mobile-friendly, and tailored to real-world clients. Our designs help customers find what they need quickly—so your work speaks for itself online.
                    </p>
                    <ul>
                        <li>Concept</li>
                        <li>Layout</li>
                        <li>Design</li>
                        <li>Icons</li>
                        <li>Animations</li>
                        <li>Typography</li>
                        <li>Logos</li>
                        <li>Hosting</li>
                        <li>Domain</li>
                        <li>SEO</li>
                    </ul>
                </motion.li>
                <motion.li
                    className="card"
                    animate={controls}
                    transition={{ delay: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scaleX: 1 },
                        hidden: { opacity: 0, scaleX: 0 }
                    }}>
                    <div className="top">
                        <div className="icon">
                            <MdCode />
                        </div>
                        <h4>E-commerce</h4>
                    </div>
                    <p>We build powerful e-commerce websites designed to help your trade or service business sell with ease, scale with confidence, and connect with customers around the clock. From clean product layouts to secure checkout systems, we focus on performance, trust, and results.</p>
                    <ul>
                        <li>Frontend</li>
                        <li>Backend</li>
                        <li>API</li>
                        <li>Database</li>
                        <li>Authentication</li>
                        <li>Hosting</li>
                        <li>Domain</li>
                        <li>SEO</li>
                    </ul>
                </motion.li>
                <motion.li
                    className="card"
                    animate={controls}
                    transition={{ delay: 0.6 }}
                    variants={{
                        visible: { opacity: 1, scaleX: 1 },
                        hidden: { opacity: 0, scaleX: 0 }
                    }}>
                    <div className="top">
                        <div className="icon">
                            <MdDeveloperMode />
                        </div>
                        <h4>Social Media</h4>
                    </div>
                    <p>We help small businesses grow their brand on social media with strategy and heart. From profile optimization to content planning, we craft digital identities that build trust, attract customers, and promote a more connected community.</p>
                    <ul>
                        <li>Profile Optimization</li>
                        <li>Content Strategy</li>
                        <li>Platform Integration</li>
                        <li>Brand Voice & Identity</li>
                    </ul>
                </motion.li>
            </ul>
        </section>
    );
};

export default Services;