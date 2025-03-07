import arrowDown from "/assets/images/arrow-down.svg";
import Union from "/assets/images/Union.svg"
import AnimatedText from "../animated/AnimatedText";
import ServicesV2Data from "../../jsonData/services/ServicesV2Data.json";
import SingleServicesV2 from "./SingleServicesV2";

const ServicesV2 = () => {
    return (
        <>
            <div className="service-sec service-sec-2" id="services">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            OUR VALUES
                        </span>
                        <AnimatedText>
                            We firmly believe in the transformation power of honesty and transparency. These values support our ability to create exceptional and meaningful work that sparks inspiration.
                        </AnimatedText>
                    </div>
                </div>
                <div className="service-lists-wrap">
                    <div className="service-lists-header">
                        <div className="custom-container">
                            <div className="service-header-th">
                                <img src={arrowDown} alt="icon" />
                                3D Illustration
                            </div>
                            <div className="service-header-th">
                                <img src={arrowDown} alt="icon" />
                                Values
                            </div>
                        </div>
                    </div>

                    <div className="service-lists">
                        {ServicesV2Data.map(service =>
                            <SingleServicesV2 service={service} key={service.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV2;