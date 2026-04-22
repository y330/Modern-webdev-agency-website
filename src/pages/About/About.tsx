import { AnimatedPage, RouterLink } from '../../components';
import './About.scss';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const About = () => {

    return (
        <AnimatedPage>
            <Helmet>
                <title>About – Yonah Studio</title>
                <meta name="description" content="Yonah Studio is a Toronto-based creative studio specializing in cinematic web experiences, digital products, and high-end interactive engineering." />
            </Helmet>
            <div className='about-screen'>
                <div className="hero">
                    <h1>About</h1>
                    <motion.h2 initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }}>
                        What I do</motion.h2>
                    <motion.p initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2 }}>
                        I am a Toronto-based digital creator dedicated to building immersive, high-performance web experiences. I build premium, cinematic platforms that help modern brands stand out and deliver a lasting impact.
                    </motion.p>
                    <motion.h3 initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }}>What do I believe?</motion.h3>

                    <motion.p initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2 }}>
                        I believe the web should be an experience, not just a destination. With a passion for combining creative technology and cinematic design, I build websites that feel as good as they function. Whether I am building a custom portfolio or a complex web application, I am dedicated to delivering unique and immersive experiences.
                    </motion.p>
                </div>
                <div className="about">
                    <motion.div className="member" initial={{ opacity: 0, translateX: "-100%" }} animate={{ opacity: 1, translateX: 0 }} transition={{ delay: 0.8 }}>
                        <div className="portrait-wrapper">
                            <img src="/Images/Me.png" alt="Yonah Aviv - Founder" />
                        </div>
                        <div className="identity">
                            <h3>Yonah Aviv</h3>
                            <p className="title">Founder</p>
                        </div>
                    </motion.div>
                    <div className="text-content">
                        <motion.h2 initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.4 }}>About Me</motion.h2>
                        <motion.p initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.6 }}>
                            I’m a detail-driven software developer and digital creator with over five years of experience. Combining expertise in computer science and psychology, I build websites and platforms that feel as good as they function, focusing on fluid animations, engaging user interfaces, and premium brand experiences.
                        </motion.p>
                        <motion.p initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.8 }}>
                            Outside of building digital experiences, my main creative outlet is music — I play guitar and produce my own songs. I also find balance through fitness, meditation, and simply enjoying the ride.
                        </motion.p>
                    </div>
                </div>
                <div className="contact">
                    <h2>Contact Me</h2>
                    <p>I’m always open to new projects and collaborations. If you’re interested in working with me, don’t hesitate to reach out.</p>
                    <RouterLink to='/connect' variant='primary'>Get in Touch</RouterLink>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default About;
