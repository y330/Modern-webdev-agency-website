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
                        <strong>Notice:</strong> We are currently working on several exciting projects. Stay tuned for updates!
                    </p>
                </motion.div>
                <ul className="projects">
                    <Project
                        title="Actualize Apparel"
                        type="Ecommerce"
                        image="/Images/actualize-merch-store.png"
                        desc="A Community For Young Entrepreunial Men In Toronto Who Want To Plug Into A Brotherhood & Become Their Best Self"
                        link="https://www.actualize.club/apparel"
                        i={0}
                        inDev
                    />
                    <Project
                        title="Miami Strong Gym"
                        type="Website"
                        image="/Images/miami-strong-gym.png"
                        desc="Aesthetic gym landing page."
                        link="https://gym-website-five-gold.vercel.app/"
                        i={1}
                    />
                    <Project
                        title="React Portfolio Website"
                        type="Website"
                        image="/Images/glass-react-portfolio.png"
                        desc="Modern portfolio website with a gorgeous glass morphism design and sleek animations."
                        link="https://yonah.vercel.app/"
                        i={1}
                    />
                    <Project
                        title="Coming soon"
                        type="Website"
                        image="/Images/construction.png"
                        desc=""
                        link="#"
                        i={2}
                        inDev
                    />
                </ul>
            </section>
        </AnimatedPage>
    );
};

const Project = ({ title, type, image, desc, link, inDev, i }: { title: string; type: string; image: string; desc: string; link: string; inDev?: boolean; i: number }) => {
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
                <motion.p className="type"
                    initial={{ opacity: 0, translateY: "100%" }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: 0.2 * (i + 3) }}>
                    {type}
                </motion.p>
                {inDev && <span className="tag">In development</span>}
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
