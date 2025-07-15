import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { RouterLink } from "../../../components";
import { VisibleControls } from "../../../hooks";

const PortfolioShowcase = () => {
    return (
        <section
            className="portfolio"
            id="portfolio">
            <h2>Portfolio</h2>
            <h3>Explore some of our latest work</h3>
            <div className="portfolio-notice">
                <p>
                    <strong>Notice:</strong> We are currently working on several exciting projects. This section will be updated soon to showcase new work. Stay tuned for updates!
                </p>
            </div>
            <ul className="projects">
                <Project
                    image="/Images/construction.png"
                    i={0}
                />
                <Project
                    image="/Images/construction.png"
                    i={1}
                />
            </ul>
            {/* <RouterLink
                to="/portfolio"
                variant="link"
                arrow>
                See more projects
            </RouterLink> */}
        </section>
    );
};

const Project = ({ image, i }: { image: string; i: number }) => {
    const ref = useRef(null);
    const controls = VisibleControls(ref);

    return (
        <motion.li
            ref={ref}
            className="project"
            animate={controls}
            transition={{ delay: 0.2 * (i + 1) }}
            variants={{
                visible: { opacity: 1, translateY: 0 },
                hidden: { opacity: 0, translateY: "20%" }
            }}>
            <Link to="/portfolio">
                <img
                    src={image}
                    alt=""
                />
            </Link>
        </motion.li>
    );
};

export default PortfolioShowcase;
