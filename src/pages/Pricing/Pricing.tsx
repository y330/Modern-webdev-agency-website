import { Helmet } from 'react-helmet-async';
import { AnimatedPage, RouterLink } from '../../components';
import './Pricing.scss';
import { motion } from 'framer-motion';

const Pricing = () => {
    return (
        <AnimatedPage>
            <Helmet>
                <title>Pricing – Our Service Packages</title>
                <meta
                    name="description"
                    content="These are the prices for our services. We offer a wide range of packages to suit every need. A free consultation is also available where we assess your requirements and provide a price estimate."
                />
            </Helmet>
            <div className="pricing-screen">
                <div className="hero-text">
                    <div className="left">
                        <h1>Pricing</h1>
                        <motion.h2
                            initial={{ opacity: 0, translateX: '-100%' }}
                            animate={{ opacity: 1, translateX: 0 }}
                        >
                            Our Website Packages
                        </motion.h2>
                    </div>
                    <div className="right">
                        <motion.p
                            initial={{ opacity: 0, translateY: '100%' }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            The prices below are for websites containing only the listed features. Additional content or features will increase the cost.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, translateY: '100%' }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            For a more accurate estimate, <RouterLink to="/contact" variant="link" arrow>Contact Us</RouterLink>
                        </motion.p>
                    </div>
                </div>

                {/* 💻 Website Packages */}
                <div className="packages">
                    <motion.div
                        className="package"
                        initial={{ opacity: 0, translateY: '100%' }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="tag">Basic</span>
                        <span className="from">From</span>
                        <span className="price">$150</span>
                        <ul>
                            <li>One Beautiful Landing Page</li>
                            <li>Up to 3 Sections</li>
                            <li>Mobile Friendly</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="package"
                        initial={{ opacity: 0, translateY: '100%' }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className="tag">Standard</span>
                        <span className="from">From</span>
                        <span className="price">$200</span>
                        <ul>
                            <li>Up to 3 pages</li>
                            <li>Mobile Friendly</li>
                            <li>Cool Animations</li>
                            <li>Contact Form</li>
                            <li>SEO</li>
                            <li>UX Optimization</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="package"
                        initial={{ opacity: 0, translateY: '100%' }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <span className="tag">Premium</span>
                        <span className="from">From</span>
                        <span className="price">$300</span>
                        <ul>
                            <li>Unlimited Sections</li>
                            <li>Responsive Design</li>
                            <li>Cool Animations</li>
                            <li>Contact Form</li>
                            <li>SEO</li>
                            <li>UX Optimization</li>
                            <li>Speed Optimization</li>
                        </ul>
                    </motion.div>
                    {/* Additional Services Card */}
                    <motion.div
                        className="package logodesign"
                        initial={{ opacity: 0, translateY: '100%' }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <span className="tag">Additional Service</span>
                        <span className="from">Logo Design</span>
                        <span className="price">$50</span>
                        <ul>
                            <li>Custom, professional logo tailored to your brand</li>
                            <li>Delivered in high-resolution formats for web & print</li>
                            <li>Unique, memorable, and scalable design</li>
                            <li>Perfect for business cards, websites, and signage</li>
                            <li>Fast turnaround and collaborative process</li>
                        </ul>
                    </motion.div>

                </div>


                {/* 📱 Social Media Packages */}
                {/* <div className="lower-text">
                    <h2>Looking for help with social media too?</h2>
                    <p>We also help you craft a social media page that connects, engages, and reflects your business’s purpose.</p>
                </div>
                <div className="packages">
                    <motion.div
                        className="package"
                        initial={{ opacity: 0, translateY: '100%' }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="tag">Basic</span>
                        <span className="from">From</span>
                        <span className="price">$199</span>
                        <ul>
                            <li>Platform Setup (Instagram, Facebook, & Tiktok)</li>
                            <li>Brand-Aligned Profile Optimization</li>
                            <li>1 Visual Template</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="package"
                        initial={{ opacity: 0, translateY: '100%' }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className="tag">Standard</span>
                        <span className="from">From</span>
                        <span className="price">$399</span>
                        <ul>
                            <li>Content Calendar (2–3 posts/week)</li>
                            <li>Branded Template Pack</li>
                            <li>Hashtag & Caption Strategy</li>
                            <li>Monthly Analytics Overview</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="package"
                        initial={{ opacity: 0, translateY: '100%' }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <span className="tag">Premium</span>
                        <span className="from">From</span>
                        <span className="price">$699</span>
                        <ul>
                            <li>Full Content Strategy + Storytelling</li>
                            <li>4–5 Posts/Week + 2 Reels/Month</li>
                            <li>Ad Campaign Setup & Optimization</li>
                            <li>Monthly Reporting + Recommendations</li>
                            <li>Platform Support (Instagram, Facebook, LinkedIn)</li>
                        </ul>
                    </motion.div>
                </div> */}

            </div>
        </AnimatedPage>
    );
};

export default Pricing;