import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import useAutoResizeTextarea from "../../hooks/AutoResizeTextarea";
import Snackbar from '../../components/Snackbar/Snackbar';

import "./GetStarted.scss";

const questions = [
    {
        label: "Tell us about your project vision",
        placeholder: "What are you looking to build? Mention any specific goals, inspirations, or requirements you have in mind.",
        name: "projectVision",
    }
];

const GetStarted = () => {
    const [form, setForm] = useState({
        businessName: "",
        personalName: "",
        email: "",
        projectVision: "",
    });

    const [submitting, setSubmitting] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', type: 'success' as 'success' | 'error' });
    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Require name, email, and vision
        const requiredFields = [
            "personalName",
            "email",
            "projectVision"
        ];
        const emptyField = requiredFields.find(field => !form[field as keyof typeof form].trim());
        if (emptyField) {
            setSnackbar({ open: true, message: 'Please fill in all required fields.', type: 'error' });
            return;
        }
        setSubmitting(true);
        
        // Send form data to EmailJS
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_GETSTARTED_TEMPLATE_ID,
                formRef.current!,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setSnackbar({ open: true, message: 'Thank you! We will be in touch soon.', type: 'success' });
                setForm({
                    businessName: '',
                    personalName: '',
                    email: '',
                    projectVision: '',
                });
            })
            .catch(() => {
                setSnackbar({ open: true, message: 'Error sending message. Please try again.', type: 'error' });
            })
            .finally(() => setSubmitting(false));
    };

    // Format the email body for EmailJS
    const formattedBody = `Project/Business: ${form.businessName}\nName: ${form.personalName}\nEmail: ${form.email}\n\nProject Vision:\n${form.projectVision}`;

    return (
        <>
            <Helmet>
                <title>Get Started – Tell Us About Your Project</title>
                <meta
                    name="description"
                    content="Answer a few questions to help us understand your digital project."
                />
            </Helmet>
            <section className="getstarted-screen">
                <h1>Get Started</h1>
                <motion.h2
                    initial={{ opacity: 0, translateY: "100%" }}
                    animate={{ opacity: 1, translateY: 0 }}
                >
                    Let's bring your project to life
                </motion.h2>
                <form className="getstarted-form" onSubmit={handleSubmit} ref={formRef}>
                    <h3 className="form-title">Send Us Your Details</h3>
                    <p className="form-subheading">To help us craft the perfect digital experience, please complete all fields below.</p>
                    <div className="input">
                        <div className="input-group">
                            <input
                                id="businessName"
                                name="businessName"
                                type="text"
                                placeholder=" "
                                value={form.businessName}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            <label htmlFor="businessName">Project or Business Name</label>
                        </div>
                        <div className="input-group">
                            <input
                                id="personalName"
                                name="personalName"
                                type="text"
                                placeholder=" "
                                value={form.personalName}
                                onChange={handleChange}
                                required
                                autoComplete="off"
                            />
                            <label htmlFor="personalName">Your Name *</label>
                        </div>
                        <div className="input-group">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder=" "
                                value={form.email}
                                onChange={handleChange}
                                required
                                autoComplete="off"
                            />
                            <label htmlFor="email">Email *</label>
                        </div>
                    </div>
                    {questions.map((q, idx) => {
                        const ref = useAutoResizeTextarea(form[q.name as keyof typeof form]);
                        return (
                            <div className="form-group" key={q.name}>
                                <label htmlFor={q.name}>{q.label}</label>
                                <textarea
                                    id={q.name}
                                    name={q.name}
                                    placeholder={q.placeholder}
                                    value={form[q.name as keyof typeof form]}
                                    onChange={handleChange}
                                    ref={ref}
                                    required
                                />
                            </div>
                        );
                    })}
                    {/* Hidden input for formatted email body */}
                    <input type="hidden" name="message" value={formattedBody} />
                    <button type="submit" className="submit-btn" disabled={submitting}>
                        {submitting ? "Submitting..." : "Submit"}
                    </button>
                </form>
                <Snackbar
                    open={snackbar.open}
                    message={snackbar.message}
                    type={snackbar.type}
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                />
            </section >
        </>
    );
};

export default GetStarted;
