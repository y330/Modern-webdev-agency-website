import { AnimatedPage, RouterLink } from '../../components';
import './About.scss';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const About = () => {

    return (
        <AnimatedPage>
            <Helmet>
                <title>About Us – We Are Aviv Digital</title>
                <meta name="description" content="Aviv Digital is a Toronto-based creative studio specializing in cinematic web experiences, digital products, and creative engineering." />
            </Helmet>
            <div className='about-screen'>
                <div className="hero">
                    <h1>About Us</h1>
                    <motion.h2 initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }}>
                        What we do</motion.h2>
                    <motion.p initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2 }}>
                        We’re a Toronto-based digital studio dedicated to crafting immersive, interactive web experiences. We build premium, cinematic websites and applications that captivate audiences and elevate modern brands.
                    </motion.p>
                    <motion.h3 initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }}>What do we believe?</motion.h3>

                    <motion.p initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2 }}>
                        At Aviv Digital, we believe the web should be an experience, not just a destination. We’re passionate about pushing the boundaries of creative technology, blending high-end design with seamless interactivity. Whether we are building a dynamic portfolio or a complex web application, we are committed to delivering digital excellence.
                    </motion.p>
                </div>
                <div className="about">
                    <motion.div className="member" initial={{ opacity: 0, translateX: "-100%" }} animate={{ opacity: 1, translateX: 0 }} transition={{ delay: 0.8 }}>
                        <img src="/Images/Me.png" alt="Photo of team member" />
                        <h3>Yonah Aviv</h3>
                        <p>Chief Website Coordinator</p>
                    </motion.div>
                    <div className="text">
                        <motion.h2 initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.4 }}>About Me</motion.h2>
                        <motion.p initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.6 }}>
                            I’m a detail-driven software developer and digital creator with over five years of experience. Combining expertise in computer science and psychology, I build websites and platforms that feel as good as they function — focusing on fluid animations, engaging user interfaces, and premium brand experiences.
                        </motion.p>
                        <motion.p initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.8 }}>
                            Outside of building digital experiences, my main creative outlet is music — I play guitar and produce my own songs. I also find balance through fitness, meditation, and simply enjoying the ride.
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
