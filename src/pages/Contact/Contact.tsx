import React, { useState, useRef } from 'react';
import './Contact.scss';
import { Anchor, AnimatedPage, Button } from '../../components';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';

const Contact = () => {

    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_wbib4ob', 'template_234jnup', e.currentTarget, 'UIsk6ldu4j8ZHw4gl')
            .then((result) => {
                console.log(result.text);
                setStatus({ type: 'success', message: 'Message sent successfully' });
                formRef.current?.reset();
            }, (error) => {
                console.log(error.text);
                setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
            });
    };

    return (
        <AnimatedPage>
            <Helmet>
                <title>Contact Us – We Help You Digitize Your Business</title>
                <meta name="description" content="Reach out and let us help you digitize your business. We offer services in web development, web design, graphic design, SEO, and much more." />
            </Helmet>
            <section className='contact-screen'>
                <div className='text'>
                    <h1>Contact Us</h1>
                    <motion.h2 initial={{ opacity: 0, translateX: "-100%" }} animate={{ opacity: 1, translateX: 0 }}>
                        Do you have a project<br /> in mind?
                    </motion.h2>
                    <motion.div className="email" initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2 }}>
                        <div className="icon">
                            <MdEmail />
                        </div>
                        <div className="emailtext">
                            <h4>Email</h4>
                            <Anchor variant='link' href='mailto:avivyonah@gmail.com'>avivyonah@gmail.com</Anchor>
                        </div>
                    </motion.div>
                </div>
                <form ref={formRef} className='form' onSubmit={handleSubmit}>
                    <h3>Send us a message</h3>
                    <div className="input-group">
                        <input type="text" name="name" id="name" placeholder=' ' required />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-group">
                        <input type="email" name="email" id="email" placeholder=' ' required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-group">
                        <input type="text" name="subject" id="subject" placeholder=' ' required />
                        <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="input-group">
                        <textarea name="message" id="message" cols={30} rows={10} placeholder=' ' required></textarea>
                        <label htmlFor="message">Message</label>
                    </div>
                    <div className="row">
                        <div className="input-group" style={{ flex: 0 }}>
                            <Button variant='primary'>Send</Button>
                        </div>
                        {status.type && <p className={status.type}>{status.message}</p>}
                    </div>
                </form>
            </section>
        </AnimatedPage>
    );
};

export default Contact;
