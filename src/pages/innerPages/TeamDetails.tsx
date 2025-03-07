import { useParams } from "react-router-dom";
import ContactV1 from "../../components/contact/ContactV1";
import HeroV2 from "../../components/hero/AboutHero";
import LayoutV3 from "../../components/layouts/LayoutV3";
import PartnerV1 from "../../components/partner/PartnerV1";
import TeamDetailsContent from "../../components/team/TeamDetailsContent";
import TeamV1Data from "../../jsonData/team/TeamV1Data.json"

const TeamDetailsPage = () => {

    const { id } = useParams();
    const data = TeamV1Data.find(member => member.id === parseInt(id || '0'))

    return (
        <>
            <LayoutV3>
                <HeroV2 title="Team Details" />
                {data && <TeamDetailsContent memberData={data}  />}
                <ContactV1 />
                <PartnerV1 />
            </LayoutV3>
        </>
    );
};

export default TeamDetailsPage;