import ContactV1 from "../../components/contact/ContactV1";
import FaqV1 from "../../components/faq/FaqV1";
import HeroV2 from "../../components/hero/AboutHero";
import LayoutV3 from "../../components/layouts/LayoutV3";
import PartnerV1 from "../../components/partner/PartnerV1";

const FaqPage = () => {
    return (
        <>
            <div className="aixor-main faq-page">
                <LayoutV3>
                    <HeroV2 title="Frequent Questions" />
                    <FaqV1 />
                    <ContactV1 />
                    <PartnerV1 />
                </LayoutV3>
            </div>
        </>
    );
};

export default FaqPage;