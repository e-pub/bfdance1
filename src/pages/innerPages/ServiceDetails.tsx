import { useParams } from 'react-router-dom';
import ServicesV1Data from "../../jsonData/services/ServicesV1Data.json"
import ServiceDetailsContent from '../../components/services/ServiceDetailsContent';
import FaqV1 from '../../components/faq/FaqV1';
import PriceV1 from '../../components/pricing/PriceV1';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV1 from '../../components/contact/ContactV1';
import PartnerV1 from '../../components/partner/PartnerV1';
import LayoutV3 from '../../components/layouts/LayoutV3';

const ServiceDetailsPage = () => {

    const { id } = useParams();
    const data = ServicesV1Data.find(service => service.id === parseInt(id || '0'))

    return (
        <>
            <div className="aixor-main service-single-page single-project">
                <LayoutV3>
                    {data && <ServiceDetailsContent serviceData={data} />}
                    <FaqV1 />
                    <PriceV1 />
                    <TestimonialV1 />
                    <ContactV1 />
                    <PartnerV1 />
                </LayoutV3>
            </div>
        </>
    );
};

export default ServiceDetailsPage;