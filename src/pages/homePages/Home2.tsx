import AboutV1 from "../../components/about/AboutV1";
import AwardsV1 from "../../components/awards/AwardsV1";
import ContactV1 from "../../components/contact/ContactV1";
import FeatureV1 from "../../components/feature/FeatureV1";
import HeroV1 from "../../components/hero/HeroV1";
import LayoutV2 from "../../components/layouts/LayoutV2";
import PartnerV1 from "../../components/partner/PartnerV1";
import PriceV1 from "../../components/pricing/PriceV1";
import ServicesV1 from "../../components/services/ServicesV1";
import TeamV1 from "../../components/team/TeamV1";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";

const Home2Page = () => {
    return (
        <>
            <div className="aixor-main home-v2">
                <LayoutV2>
                    <HeroV1 />
                    <AboutV1 />
                    <ServicesV1 />
                    <FeatureV1 />
                    <AwardsV1 />
                    <TeamV1 />
                    <PriceV1 />
                    <TestimonialV1 />
                    <ContactV1 />
                    <PartnerV1 />
                </LayoutV2>
            </div>
        </>
    );
};

export default Home2Page;