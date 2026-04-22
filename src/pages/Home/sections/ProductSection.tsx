import { motion } from "framer-motion";
import { useRef } from "react";
import { VisibleControls } from "../../../hooks";
import { MdShoppingCart, MdWeb, MdStorage, MdApi, MdSpeed, MdShield } from "react-icons/md";

const ProductSection = () => {
    const ref = useRef<HTMLElement>(null);
    const controls = VisibleControls(ref);

    const features = [
        {
            icon: <MdShoppingCart />,
            title: "Custom E-commerce",
            desc: "Bespoke online stores tailored to your brand's unique needs and customer journey."
        },
        {
            icon: <MdWeb />,
            title: "Web Applications",
            desc: "Complex, scalable web apps built with modern frameworks for maximum performance."
        },
        {
            icon: <MdStorage />,
            title: "Platform Engineering",
            desc: "Robust backend infrastructure designed to handle high traffic and complex logic."
        },
        {
            icon: <MdApi />,
            title: "API Integrations",
            desc: "Seamless connectivity between your digital product and third-party services."
        },
        {
            icon: <MdSpeed />,
            title: "Performance Tuning",
            desc: "Optimization of every line of code to ensure lightning-fast load times."
        },
        {
            icon: <MdShield />,
            title: "Security Audits",
            desc: "Comprehensive security checks to protect your data and your customers' trust."
        }
    ];

    return (
        <section className="product-section" ref={ref}>
            <div className="container">
                <div className="text-content">
                    <motion.h2 
                        animate={controls}
                        transition={{ delay: 0.2 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: "20px" }
                        }}
                    >
                        Built for Scale
                    </motion.h2>
                    <motion.h3
                        animate={controls}
                        transition={{ delay: 0.4 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: "20px" }
                        }}
                    >
                        Premium Digital Products & Commerce
                    </motion.h3>
                    <motion.p
                        animate={controls}
                        transition={{ delay: 0.6 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: "20px" }
                        }}
                    >
                        We build high-performance e-commerce platforms and custom web applications designed to scale. We blend conversion-driven design with robust, modern engineering.
                    </motion.p>
                </div>
                
                <div className="features-grid">
                    {features.map((f, i) => (
                        <motion.div 
                            key={i}
                            className="feature-card"
                            animate={controls}
                            transition={{ delay: 0.1 * (i + 1) }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 0.9 }
                            }}
                        >
                            <div className="icon-box">{f.icon}</div>
                            <h4>{f.title}</h4>
                            <p>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
