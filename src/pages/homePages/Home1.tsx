import { useState, useEffect } from "react";
import LayoutV1 from "../../components/layouts/LayoutV1";
import HeroV1 from "../../components/hero/HeroV1";
import Schedule from "../../components/0_modules/Schedule";
import CalendarDiary from "../../components/0_modules/CalendarDiary";
import AboutV1 from "../../components/about/AboutV1";
import ServicesV1 from "../../components/services/ServicesV1";
import FeatureV1 from "../../components/feature/FeatureV1";
import AwardsV1 from "../../components/awards/AwardsV1";
import TeamV1 from "../../components/team/TeamV1";
import PriceV1 from "../../components/pricing/PriceV1";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";
import ContactV1 from "../../components/contact/ContactV1";
import PartnerV1 from "../../components/partner/PartnerV1";

// 🔹 Instagram 릴스 데이터 타입 정의
type ReelItem = {
    timestamp: string;
    permalink: string;
};

type EventItem = {
    title: string;
    link: string;
};

type EventsData = Record<string, EventItem[]>; // 🔹 날짜별 여러 개의 이벤트 저장 가능

const Home1Page = () => {
    const [events, setEvents] = useState<EventsData>({});

    useEffect(() => {
        fetch("https://bfdance-workers.YOUR_SUBDOMAIN.workers.dev/api/fetch-reels")
            .then((res) => res.json())
            .then((data) => {
                // 🔹 데이터 변환: { 날짜: [{ title, link }, ...] }
                const eventMap = (data?.data as ReelItem[] || []).reduce<EventsData>(
                    (acc, reel) => {
                        const date = new Date(Number(reel.timestamp) * 1000).toISOString().split("T")[0];
                        acc[date] = acc[date] ? [...acc[date], { title: "📌 Instagram 게시글", link: reel.permalink }] 
                                              : [{ title: "📌 Instagram 게시글", link: reel.permalink }];
                        return acc;
                    }, {}
                );

                setEvents(eventMap);
            })
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
