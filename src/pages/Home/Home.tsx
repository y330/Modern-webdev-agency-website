import { AnimatedPage, Button, Checkmark, Clock, RouterLink, LocationPin } from "../../components";
import "./Home.scss";
import { Helmet } from "react-helmet-async";
import Hero from "./sections/Hero";
import WhyUs from "./sections/WhyUs";
import Services from "./sections/Services";
import PortfolioShowcase from "./sections/PortfolioShowcase";
import Testimony from "./sections/Testimony";
import FeaturedPricing from "./sections/FeaturedPricing";
import QuickContact from "./sections/QuickContact";
import QuickAbout from "./sections/QuickAbout";

const Home = () => {
    return (
        <AnimatedPage>
            <Helmet>
                <title>World Peace Web Services – Digital Impact for Trades & Communities</title>
                <meta
                    name="description"
                    content="We craft purpose-driven websites that help trades and service professionals grow online with trust, clarity, and local impact—because peace begins with visibility."
                />
            </Helmet>
            <div className="home-screen">
                <Hero />
                <QuickAbout />
                <Services />
                <WhyUs />
                <PortfolioShowcase />
                <Testimony />
                <FeaturedPricing />
                <QuickContact />
            </div>
        </AnimatedPage>
    );
};


export default Home;
