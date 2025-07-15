import { Helmet } from "react-helmet-async";
import "./GetStarted.scss";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import useAutoResizeTextarea from "../../hooks/AutoResizeTextarea";
import emailjs from "@emailjs/browser";
import Snackbar from '../../components/Snackbar/Snackbar';

const questions = [
    {
        label: "What specific trade services do you offer, and what problems do they solve for your customers?",
        placeholder:
            "e.g. Plumbing repairs, electrical installations, carpentry, etc. What common issues do you address?",
        name: "services",
    },
    {
        label: "Who are your typical customers, and what are their biggest concerns when hiring a tradesperson?",
        placeholder:
            "e.g. Homeowners, small businesses, or landlords. Are they looking for reliability, affordability, or quick service?",
        name: "customers",
    },
    {
        label: "What makes your trade business stand out from competitors in your area?",
        placeholder:
            "e.g. Do you offer faster response times, affordable pricing, or specialized expertise?",
        name: "unique",
    },
    {
        label: "Do you have any certifications, licenses, or guarantees that build trust with your customers?",
        placeholder:
            "e.g. Are you licensed, insured, or do you offer warranties on your work?",
        name: "certifications",
    },
    {
        label: "What areas or regions do you serve, and do you offer emergency or after-hours services?",
        placeholder:
            "e.g. Are you focused on local neighborhoods or broader regions? Do you provide 24/7 service?",
        name: "regions",
    },
    {
        label: "What do your customers say about your work? Do you have testimonials or reviews to share?",
        placeholder:
            "e.g. Feedback from past clients. If you have a lot reviews on Google Maps, just write \"blank\"—we’ll handle it.",
        name: "testimonials",
    },
];

const GetStarted = () => {
    const [form, setForm] = useState({
        services: "",
        customers: "",
        unique: "",
        certifications: "",
        regions: "",
        testimonials: "",
        businessName: "",
        personalName: "",
        googleMap: "",
        phone: "",
        email: "",
    });

    const [submitting, setSubmitting] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', type: 'success' as 'success' | 'error' });
    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Require all form fields to be filled
        const requiredFields = [
            "businessName",
            "personalName",
            "phone",
            "email",
            "googleMap",
            "services",
            "customers",
            "unique",
            "certifications",
            "regions",
            "testimonials"
        ];
        const emptyField = requiredFields.find(field => !form[field as keyof typeof form].trim());
        if (emptyField) {
            setSnackbar({ open: true, message: 'Please fill in all fields before submitting.', type: 'error' });
            return;
        }
        setSubmitting(true);
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_GETSTARTED_TEMPLATE_ID,
                formRef.current!,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setSnackbar({ open: true, message: 'Thank you for your answers! We will be in touch soon.', type: 'success' });
                setForm({
                    services: '',
                    customers: '',
                    unique: '',
                    certifications: '',
                    regions: '',
                    testimonials: '',
                    businessName: '',
                    personalName: '',
                    googleMap: '',
                    phone: '',
                    email: '',
                });
            })
            .catch(() => {
                setSnackbar({ open: true, message: 'There was an error sending your answers. Please try again later.', type: 'error' });
            })
            .finally(() => setSubmitting(false));
    };

    // Format the email body for EmailJS
    const formattedBody = `Business Name: ${form.businessName}\nPersonal Name: ${form.personalName}\nPhone: ${form.phone}\nEmail: ${form.email}\nGoogle Map Link: ${form.googleMap}\n\n1. What specific trade services do you offer, and what problems do they solve for your customers?\n${form.services}\n\n2. Who are your typical customers, and what are their biggest concerns when hiring a tradesperson?\n${form.customers}\n\n3. What makes your trade business stand out from competitors in your area?\n${form.unique}\n\n4. Do you have any certifications, licenses, or guarantees that build trust with your customers?\n${form.certifications}\n\n5. What areas or regions do you serve, and do you offer emergency or after-hours services?\n${form.regions}\n\n6. What do your customers say about your work? Do you have testimonials or reviews to share?\n${form.testimonials}`;

    return (
        <>
            <Helmet>
                <title>Get Started – Tell Us About Your Trade Business</title>
                <meta
                    name="description"
                    content="Answer a few questions to help us understand your trade business."
                />
            </Helmet>
            <section className="getstarted-screen">
                <h1>Get Started</h1>
                <motion.h2
                    initial={{ opacity: 0, translateY: "100%" }}
                    animate={{ opacity: 1, translateY: 0 }}
                >
                    Tell us about your trade business
                </motion.h2>
                <div className="getstarted-info">
                    <p>
                        With the information you provide below, our team will professionally write all the content for your website. This ensures your site accurately reflects your business and appeals to your ideal customers.
                    </p>
                </div>
                <form className="getstarted-form" onSubmit={handleSubmit} ref={formRef}>
                    <div className="input-row">
                        <div className="input-group">
                            <input
                                id="businessName"
                                name="businessName"
                                type="text"
                                placeholder=" "
                                value={form.businessName}
                                onChange={handleChange}
                                required
                                autoComplete="off"
                            />
                            <label htmlFor="businessName">Business Name</label>
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
                            <label htmlFor="personalName">Your Name</label>
                        </div>
                    </div>
                    <div className="input-row">
                        <div className="input-group">
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder=" "
                                value={form.phone}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            <label htmlFor="phone">Phone Number</label>
                        </div>
                        <div className="input-group">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder=" "
                                value={form.email}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="input-group full-width">
                        <input
                            id="googleMap"
                            name="googleMap"
                            type="text"
                            placeholder=" "
                            value={form.googleMap}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <label htmlFor="googleMap">Google Maps Link</label>
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
            </section>
        </>
    );
};

export default GetStarted;
