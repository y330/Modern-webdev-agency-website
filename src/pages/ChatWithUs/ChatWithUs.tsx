import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import "./ChatWithUs.scss";
import { Button } from "../../components";
import { useState } from "react";

const GOOGLE_CALENDAR_LINK = "https://calendar.app.google/CWChv4B32iwdE2heA";

const ChatWithUs = () => {

    return (
        <>
            <Helmet>
                <title>Chat With Us – Book a Free Consultation</title>
                <meta
                    name="description"
                    content="Book a free call to discuss your business goals, website needs, and how we can help you grow online."
                />
            </Helmet>
            <section className="chatwithus-screen">
                <h1>Chat With Us</h1>
                <motion.h2
                    initial={{ opacity: 0, translateY: "100%" }}
                    animate={{ opacity: 1, translateY: 0 }}
                >
                    Book a Free Consultation Call
                </motion.h2>

                <motion.img
                    src="/Images/book-an-appointment.png"
                    alt="Book an appointment"
                    className="chatwithus-img"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                />
                <motion.div
                    className="calendar-booking"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ delay: 0.6 }}
                >
                    <Button variant="primary" className="pulsating calendar-btn">
                        <a
                            href={GOOGLE_CALENDAR_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="calendar-link"
                        >
                            Book a Call via Google Calendar
                        </a>
                    </Button>
                </motion.div>


            </section >
        </>
    );
};

export default ChatWithUs;
