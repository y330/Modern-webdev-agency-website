import React, { useState, useRef } from 'react';
import './Contact.scss';
import { Anchor, AnimatedPage, Button } from '../../components';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MdEmail, MdLocalPhone } from 'react-icons/md';

const GOOGLE_CALENDAR_LINK = "https://calendar.app.google/CWChv4B32iwdE2heA";

const Contact = () => {

    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm(
            String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
            String(import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID),
            e.currentTarget,
            String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
        )
            .then((result: EmailJSResponseStatus) => {
                setStatus({ type: 'success', message: 'Message sent successfully' });
                formRef.current?.reset();
            })
            .catch((error: any) => {
                setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
            });
    };

    return (
        <AnimatedPage>
            <Helmet>
                <title>Contact – Yonah Studio</title>
                <meta name="description" content="Connect with Yonah Aviv to start your next cinematic project. Book a call or send a message." />
            </Helmet>
            <section className='contact-screen'>
                <div className='text'>
                    <h1>Connect</h1>
                    <motion.h2 initial={{ opacity: 0, translateX: "-100%" }} animate={{ opacity: 1, translateX: 0 }}>
                        Let's build something<br /> extraordinary.
                    </motion.h2>

                    <motion.div className="booking-cta" initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2 }}>
                        <h3>Ready to talk strategy?</h3>
                        <p>Skip the email and book a session directly into my calendar.</p>
                        <Button variant='primary' className="pulsating">
                            <a href={GOOGLE_CALENDAR_LINK} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                Book a Free Call
                            </a>
                        </Button>
                    </motion.div>

                    <div className="contact-info">
                        <motion.div className="info-item" initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.3 }}>
                            <div className="icon">
                                <MdEmail />
                            </div>
                            <div className="info-text">
                                <h4>Email</h4>
                                <Anchor variant='link' href='mailto:avivyonah@gmail.com'>avivyonah@gmail.com</Anchor>
                            </div>
                        </motion.div>
                        <motion.div className="info-item" initial={{ opacity: 0, translateY: "100%" }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.4 }}>
                            <div className="icon">
                                <MdLocalPhone />
                            </div>
                            <div className="info-text">
                                <h4>Phone</h4>
                                <Anchor variant='link' href='tel:+1-647-975-7192'>(647)-975-7192</Anchor>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <form ref={formRef} className='form' onSubmit={handleSubmit}>
                    <h3>Send me a message</h3>
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
