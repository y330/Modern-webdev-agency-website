import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { RouterLink } from "../../../components";
import { VisibleControls } from "../../../hooks";

const FeaturedPricing = () => {
    const ref = useRef(null);
    const controls = VisibleControls(ref);

    return (
        <section
            className="pricing"
            id="pricing">
            <div className="left">
                <h2>Pricing</h2>
                <motion.h3
                    animate={controls}
                    transition={{ delay: 0.2 }}
                    variants={{
                        visible: { opacity: 1, translateX: 0 },
                        hidden: { opacity: 0, translateX: "-100%" }
                    }}>
                    Get a responsive website from just $150
                </motion.h3>
                <RouterLink
                    variant="link"
                    to="/pricing"
                    arrow>
                    View all packages
                </RouterLink>
            </div>
            <div className="right">
                <Link to="/pricing">
                    <motion.div
                        className="package"
                        ref={ref}
                        animate={controls}
                        transition={{ delay: 0.4 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: "100%" }
                        }}>
                        <span className="tag">Basic</span>
                        <span className="from">From</span>
                        <span className="price">$150</span>
                        <ul>
                            <li>Up to 3 pages</li>
                            <li>Responsive Design</li>
                            <li>Contact Form</li>
                        </ul>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
};


export default FeaturedPricing;