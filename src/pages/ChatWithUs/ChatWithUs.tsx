import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import "./ChatWithUs.scss";

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
                <div className="chatwithus-info messagebubble">
                    <p>
                        Schedule a free, no-pressure call to discuss your business, your goals, and how we can help you grow online. We'll answer your questions, offer expert advice, and help you take the next step with confidence.
                    </p>
                </div>
                <div className="calendar-booking">
                    <h3>Find a time that works for you:</h3>
                    {/* Cool idea: add a UX design that shows asks Do you want to book a call or not, if yes imessage typing indicator pops up and then says in messagebubble "Alright, taking you to our booking page." then automatically redirect user */}
                    <a
                        href={GOOGLE_CALENDAR_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="calendar-btn"
                    >
                        Book a Call via Google Calendar
                    </a>
                </div>
            </section>
        </>
    );
};

export default ChatWithUs;
