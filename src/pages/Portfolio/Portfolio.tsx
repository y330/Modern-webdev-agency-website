import { Helmet } from "react-helmet-async";
import { AnimatedPage } from "../../components";
import "./Portfolio.scss";
import { motion } from "framer-motion";

const Portfolio = () => {
    return (
        <AnimatedPage>
            <Helmet>
                <title>Portfolio – Explore Some of My Latest Projects</title>
                <meta
                    name="description"
                    content="Explore some of my latest projects"
                />
            </Helmet>
            <section className="portfolio-screen">
                <h1>Portfolio</h1>
                <motion.h2
                    initial={{ opacity: 0, translateY: "100%" }}
                    animate={{ opacity: 1, translateY: 0 }}>
                    Explore some of my latest projects
                </motion.h2>
                {/* <motion.div className="portfolio-notice">
                    <p>
                        <strong>Notice:</strong> We are currently working on several exciting projects. Stay tuned for updates!
                    </p>
                </motion.div> */}
                <ul className="projects">
                    <Project
                        title="Kulture Entertainment"
                        type="Music / Events"
                        image="/Images/projects/kultur-screenshot.png"
                        desc="Toronto's underground progressive house nights driven by atmosphere, intention, and community. A premium experience where world-class sound meets an intimate crowd."
                        link="https://kulturentertainment.com/"
                        i={0}
                    />


                    <Project
                        title="Actualize Summit"
                        type="Event"
                        image="/Images/projects/actualize-summit.png"
                        desc="A high-performance landing page for Actualize's yearly summit. Built in collaboration with the Actualize team to deliver a premium registration experience."
                        link="https://actualize.club/summit-toronto"
                        coDeveloped
                        i={2}
                    />
                    <Project
                        title="Actualize Apparel"
                        type="Ecommerce"
                        image="/Images/projects/actualize-merch-store.png"
                        desc="A premium custom merch store for Actualize, a community for young entrepreneurial men in Toronto. Designed to provide a sleek e-commerce experience that reflects the brand's identity. (Note: Site currently undergoing maintenance)"
                        link="https://actualize.club"
                        i={1}
                    />
                    <Project
                        title="Coming soon"
                        type="👀"
                        image="/Images/construction.png"
                        desc=""
                        link=""
                        i={3}
                    />
                </ul>
            </section>
        </AnimatedPage>
    );
};

const Project = ({ title, type, image, desc, link, inDev, coDeveloped, i }: { title: string; type: string; image: string; desc: string; link: string; inDev?: boolean; coDeveloped?: boolean; i: number }) => {
    return (
        <li className="project">
            <motion.div
                className="image"
                initial={{ opacity: 0, translateY: "20%" }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 0.2 * (i + 1) }}>
                <a href={link} target="_blank" rel="noreferrer">
                    <img
                        src={image}
                        alt={title} />
                </a>
            </motion.div>
            <div className="text">
                <motion.h4 className="title"
                    initial={{ opacity: 0, translateY: "100%" }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: 0.2 * (i + 2) }}>
                    {title}
                </motion.h4>
                <div className="tags">
                    <motion.span className="tag"
                        initial={{ opacity: 0, translateY: "100%" }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 0.2 * (i + 3) }}>
                        {type}
                    </motion.span>
                    {coDeveloped && (
                        <motion.span className="tag collaborative"
                            initial={{ opacity: 0, translateY: "100%" }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ delay: 0.2 * (i + 3.5) }}>
                            Co-developed
                        </motion.span>
                    )}
                    {inDev && <span className="tag">In development</span>}
                </div>
            </div>
            <div className="project-description">
                <motion.p className="type"
                    initial={{ opacity: 0, translateY: "100%" }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: 0.2 * (i + 3) }}>
                    {desc}
                </motion.p>
            </div>
        </li>
    );
};

export default Portfolio;
