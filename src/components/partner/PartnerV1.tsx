import PartnerData from "../../jsonData/partner/PartnerData.json";

const PartnerV1 = () => {
    return (
        <>
            <div className="our-partner-sec">
                <ul>
                    {PartnerData.map(data =>
                        <li key={data.id}><img src={`/assets/images/${data.thumb}`} alt="client" /></li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default PartnerV1;