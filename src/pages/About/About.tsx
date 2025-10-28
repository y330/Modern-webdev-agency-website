import { AnimatedPage, RouterLink } from '../../components';
import './About.scss';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const About = () => {

    return (
        <AnimatedPage>
            <Helmet>
                <title>About Us – We Are World Peace Web Services</title>
                <meta name="description" content="We are World Peace Web Services. We're a company offering services in web design, web development, and mobile applications." />
            </Helmet>
            <div className='about-screen'>
                <div className="hero">
                    <h1>About Us</h1>
                    <motion.h2 initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }}>
                        What we do</motion.h2>
                    <motion.p initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2 }}>
                        We’re a Toronto-based web development studio dedicated to helping local trades and service businesses thrive online. Get a purpose-built website that enhances your presence on Google Maps and helps your business stand out locally.
                    </motion.p>
                    <motion.h3 initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }}>What do we believe?</motion.h3>

                    <motion.p initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2 }}>
                        At World Peace Web Services, we believe that technology can uplift humanity. We’re passionate about using our skills to create websites and applications that not only look great but also make a positive impact on the world. Whether it’s helping a local business grow or supporting a non-profit organization, we’re committed to making a difference through technology.
                    </motion.p>
                </div>
                <div className="about">
                    <motion.div className="member" initial={{ opacity: 0, translateX: "-100%" }} animate={{ opacity: 1, translateX: 0 }} transition={{ delay: 0.8 }}>
                        <img src="/Images/Me.png" alt="Photo of team member" />
                        <h3>Yonah</h3>
                        <p>Founder</p>
                    </motion.div>
                    <div className="text">
                        <motion.h2 initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.4 }}>About Me</motion.h2>
                        <motion.p initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.6 }}>
                            I’m a detail-driven software developer with over five years of experience building software that matters. Combining expertise in computer science and psychology, I build websites and platforms that feel as good as they function—designed to uplift trades, professionals, and local communities.
                        </motion.p>
                    </div>
                </div>
                <div className="contact">
                    <h2>Contact Us</h2>
                    <p>We’re always open to new projects and collaborations. If you’re interested in working with us, don’t hesitate to reach out.</p>
                    <RouterLink to='/contact' variant='primary'>Get in Touch</RouterLink>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default About;
