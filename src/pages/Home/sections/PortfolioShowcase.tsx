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
            <h3>Explore some of my latest work</h3>
            {/* <div className="portfolio-notice">
                <p>
                    <strong>Notice:</strong> We are currently working on several exciting projects. Stay tuned for updates!
                </p>
            </div> */}
            <ul className="projects">
                <Project
                    image="/Images/projects/kultur-screenshot.png"
                    title="Kulture Entertainment"
                    i={0}
                />
                <Project
                    image="/Images/projects/actualize-summit.png"
                    title="Actualize Summit"
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

const Project = ({ image, title, i }: { image: string; title: string; i: number }) => {
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
                    alt={title}
                />

            </Link>
        </motion.li>
    );
};

export default PortfolioShowcase;
