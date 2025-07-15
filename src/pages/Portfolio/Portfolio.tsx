import { Helmet } from "react-helmet-async";
import { AnimatedPage } from "../../components";
import "./Portfolio.scss";
import { motion } from "framer-motion";

const Portfolio = () => {
    return (
        <AnimatedPage>
            <Helmet>
                <title>Portfolio – Explore Some of Our Latest Projects</title>
                <meta
                    name="description"
                    content="Explore some of our latest projects"
                />
            </Helmet>
            <section className="portfolio-screen">
                <h1>Portfolio</h1>
                <motion.h2
                    initial={{ opacity: 0, translateY: "100%" }}
                    animate={{ opacity: 1, translateY: 0 }}>
                    Explore some of our latest projects
                </motion.h2>
                <motion.div className="portfolio-notice">
                    <p>
                        <strong>Notice:</strong> We are currently working on several exciting projects. This section will be updated soon to showcase new work. Stay tuned for updates!
                    </p>
                </motion.div>
                <ul className="projects">
                    <Project
                        title="HVAC 4U"
                        type="Website"
                        image="/Images/construction.png"
                        i={0}
                        inDev
                    />
                    <Project
                        title="Premium Paint GTA"
                        type="Website"
                        image="/Images/construction.png"
                        i={1}
                        inDev

                    />
                    <Project
                        title="Coming soon"
                        type="Website"
                        image="/Images/construction.png"
                        i={2}
                        inDev
                    />
                </ul>
            </section>
        </AnimatedPage>
    );
};

const Project = ({ title, type, image, inDev, i }: { title: string; type: string; image: string; inDev?: boolean; i: number }) => {
    return (
        <li className="project">
            <motion.div
                className="image"
                initial={{ opacity: 0, translateY: "20%" }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 0.2 * (i + 1) }}>
                <img
                    src={image}
                    alt={title}
                />
            </motion.div>
            <div className="text">
                <motion.h4 className="title"
                    initial={{ opacity: 0, translateY: "100%" }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: 0.2 * (i + 2) }}>
                    {title}
                </motion.h4>
                <motion.p className="type"
                    initial={{ opacity: 0, translateY: "100%" }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: 0.2 * (i + 3) }}>
                    {type}
                </motion.p>
                {inDev && <span className="tag">In development</span>}
            </div>
        </li>
    );
};

export default Portfolio;
