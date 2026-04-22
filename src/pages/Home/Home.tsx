import { AnimatedPage, Button, Checkmark, Clock, RouterLink, LocationPin } from "../../components";
import "./Home.scss";
import { Helmet } from "react-helmet-async";
import Hero from "./sections/Hero";
import WhyUs from "./sections/WhyUs";
import Capabilities from "./sections/Capabilities";
import PortfolioShowcase from "./sections/PortfolioShowcase";
import Testimony from "./sections/Testimony";
import FeaturedPricing from "./sections/FeaturedPricing";
import QuickContact from "./sections/QuickContact";
import QuickAbout from "./sections/QuickAbout";

const Home = () => {
    return (
        <AnimatedPage>
            <Helmet>
                <title>Aviv Digital – Premium Interactive Digital Experiences</title>
                <meta
                    name="description"
                    content="We craft purpose-driven, premium digital experiences that help modern brands grow online with stunning interactivity, fluid animations, and high-end design."
                />
            </Helmet>
            <div className="home-screen">
                <Hero />
                <QuickAbout />
                <Capabilities />
                <WhyUs />
                <PortfolioShowcase />
                {/* <Testimony /> */}
                {/* <FeaturedPricing /> */}
                <QuickContact />
            </div>
        </AnimatedPage>
    );
};


export default Home;
