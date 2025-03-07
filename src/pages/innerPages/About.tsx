import AboutV2 from "../../components/about/AboutV2";
import ContactV1 from "../../components/contact/ContactV1";
import FaqV1 from "../../components/faq/FaqV1";
import HeroV2 from "../../components/hero/AboutHero";
import LayoutV3 from "../../components/layouts/LayoutV3";
import PartnerV1 from "../../components/partner/PartnerV1";
import ProcessV1 from "../../components/process/ProcessV1";
import ServicesV2 from "../../components/services/ServicesV2";
import TeamV1 from "../../components/team/TeamV1";

const AboutPage = () => {
    return (
        <div className="aixor-main about-page">
            <LayoutV3>
                <HeroV2 title="About Us" />
                <AboutV2 />
                <ServicesV2 />
                <ProcessV1 />
                <FaqV1 />
                <TeamV1 />
                <ContactV1 />
                <PartnerV1 />
            </LayoutV3>
        </div>
    );
};

export default AboutPage;