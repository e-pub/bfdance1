import HeroV2 from '../../components/hero/AboutHero';
import ContactV2 from '../../components/contact/ContactV2';
import FaqV1 from '../../components/faq/FaqV1';
import PartnerV1 from '../../components/partner/PartnerV1';
import LayoutV3 from '../../components/layouts/LayoutV3';

const ContactPage = () => {
    return (
        <>
            <LayoutV3>
                <HeroV2 title="Contact Us" />
                <ContactV2 />
                <FaqV1 />
                <PartnerV1 />
            </LayoutV3>
        </>
    );
};

export default ContactPage;