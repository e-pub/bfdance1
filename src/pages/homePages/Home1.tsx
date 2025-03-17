import { useState, useEffect } from "react";
import AboutV1 from "../../components/about/AboutV1";
import AwardsV1 from "../../components/awards/AwardsV1";
import ContactV1 from "../../components/contact/ContactV1";
import FeatureV1 from "../../components/feature/FeatureV1";
import HeroV1 from "../../components/hero/HeroV1";
import Schedule from "../../components/0_modules/Schedule";
/* import AnimatedText from "../../components/0_modules/AnimatedText"; */
import CalendarDiary from "../../components/0_modules/CalendarDiary";
import LayoutV1 from "../../components/layouts/LayoutV1";
import PartnerV1 from "../../components/partner/PartnerV1";
import PriceV1 from "../../components/pricing/PriceV1";
import ServicesV1 from "../../components/services/ServicesV1";
import TeamV1 from "../../components/team/TeamV1";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";

const Home1Page = () => {
    const [events, setEvents] = useState({});

    useEffect(() => {
        fetch("https://bfdance-workers.YOUR_SUBDOMAIN.workers.dev/api/fetch-reels")
            .then((res) => res.json())
            .then((data) =>
                setEvents(
                    data?.data?.reduce((acc, reel) => {
                        const date = reel.timestamp.split("T")[0];
                        acc[date] = acc[date] ? [...acc[date], { link: reel.permalink }] : [{ link: reel.permalink }];
                        return acc;
                    }, {})
                )
            )
            .catch(() => setEvents({}));
    }, []);

    return (
        <div className="aixor-main">
            <LayoutV1>
                <HeroV1 />
                <Schedule />
                <CalendarDiary events={events} />
                <AboutV1 />
                <ServicesV1 />
                <FeatureV1 />
                <AwardsV1 />
                <TeamV1 />
                <PriceV1 />
                <TestimonialV1 />
                <ContactV1 />
                <PartnerV1 />
            </LayoutV1>
        </div>
    );
};

export default Home1Page;