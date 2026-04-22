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
                <h2>Our Capabilities</h2>
                <h3>
                    Elevating your brand with
                    <br /> cinematic digital experiences
                </h3>
            </div>
            <ul className="options">
                <li className="option">
                    <Button
                        variant="choice"
                        className={serviceIndex === 0 ? "active" : ""}
                        onClick={() => setServiceIndex(0)}>
                        Cinematic Web
                    </Button>
                </li>
                <li className="option">
                    <Button
                        variant="choice"
                        className={serviceIndex === 1 ? "active" : ""}
                        onClick={() => setServiceIndex(1)}>
                        Digital Products
                    </Button>
                </li>
                <li className="option">
                    <Button
                        variant="choice"
                        className={serviceIndex === 2 ? "active" : ""}
                        onClick={() => setServiceIndex(2)}>
                        Creative Tech
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
                        <h3>Cinematic Web</h3>
                    </div>
                    <p>
                        We craft immersive, interactive web experiences that blend high-end design with seamless motion. Our focus is on storytelling and cinematic aesthetics that captivate audiences.
                    </p>
                    <ul>
                        <li>Art Direction</li>
                        <li>UI/UX Design</li>
                        <li>Motion Graphics</li>
                        <li>Interactive Design</li>
                        <li>Brand Identity</li>
                        <li>SEO Optimization</li>
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
                        <h3>Digital Products</h3>
                    </div>
                    <p>We build premium e-commerce platforms and custom web applications designed for scale and performance. We blend conversion-driven design with robust engineering.</p>
                    <ul>
                        <li>Custom E-commerce</li>
                        <li>Web Applications</li>
                        <li>Platform Engineering</li>
                        <li>API Integrations</li>
                        <li>Performance Tuning</li>
                        <li>Security Audits</li>
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
                        <h3>Creative Tech</h3>
                    </div>
                    <p>Pushing the boundaries of the web with custom experimental tech, AI-driven integrations, and tailored automation that streamlines your digital operations.</p>
                    <ul>
                        <li>GenAI Integration</li>
                        <li>Custom Automation</li>
                        <li>Experimental Web</li>
                        <li>Backend Systems</li>
                        <li>Content Strategy</li>
                        <li>Workflow Design</li>
                    </ul>
                </motion.li>
            </ul>
        </section>
    );
};

export default Services;