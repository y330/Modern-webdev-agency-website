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
                        <h3>Trade/Service</h3>
                    </div>
                    <p>
                        We build custom labnding pages for trades and service businesses that are easy to navigate, mobile-friendly, and tailored to real-world clients. Our designs help customers find what they need quickly so your work speaks for itself online.
                    </p>
                    <ul>
                        <li>Concept</li>
                        <li>Layout</li>
                        <li>Design</li>
                        <li>Icons</li>
                        <li>Animations</li>
                        <li>Logo Design</li>
                        <li>Branding</li>
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
                        <h3>E-commerce</h3>
                    </div>
                    <p>We build powerful e-commerce websites designed to help your trade or service business sell with ease, scale with confidence, and connect with customers around the clock. From clean product layouts to secure checkout systems, we focus on performance, trust, and results.</p>
                    <ul>
                        <li>Frontend</li>
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
                        <h3>Software</h3>
                    </div>
                    <p>Need help with another kind of website or custom software? We’re happy to support any project, especially those built to serve people or make life easier. Let’s talk.</p>
                    <ul>
                        <li>Purposeful Branding</li>
                        <li>Frontend</li>
                        <li>Backend</li>
                        <li>GenAI Integration</li>
                        <li>Content Strategy</li>
                        <li>Cross-Platform Integration</li>
                    </ul>
                </motion.li>
            </ul>
        </section>
    );
};

export default Services;