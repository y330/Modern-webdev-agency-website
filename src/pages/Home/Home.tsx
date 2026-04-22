import { AnimatedPage, Button, Checkmark, Clock, RouterLink, LocationPin } from "../../components";
import "./Home.scss";
import { Helmet } from "react-helmet-async";
import Hero from "./sections/Hero";
import WhyUs from "./sections/WhyUs";
import OurServices from "./sections/OurServices";
import PortfolioShowcase from "./sections/PortfolioShowcase";
import Testimony from "./sections/Testimony";
import FeaturedPricing from "./sections/FeaturedPricing";
import QuickContact from "./sections/QuickContact";
import QuickAbout from "./sections/QuickAbout";

const Home = () => {
    return (
        <AnimatedPage>
            <Helmet>
                <title>Yonah Studio – Cinematic Web Experiences</title>
                <meta name="description" content="I craft purpose-driven, cinematic digital experiences that blend minimalist design with seamless interactivity." />
            </Helmet>
            <div className="home-screen">
                <Hero />
                <QuickAbout />
                <OurServices />
                <WhyUs />
                <PortfolioShowcase />
                <Testimony />
                {/* <FeaturedPricing /> */}
                <QuickContact />
            </div>
        </AnimatedPage>
    );
};


export default Home;
