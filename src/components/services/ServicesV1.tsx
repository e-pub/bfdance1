import Union from "/assets/images/Union.svg"
import arrowDown from "/assets/images/arrow-down.svg"
import AnimatedText from "../animated/AnimatedText"
import ServicesV1Data from "../../jsonData/services/ServicesV1Data.json"
import SingleServicesV1 from "./SingleServicesV1"

const ServicesV1 = () => {
    return (
        <>
            <div className="service-sec" id="services">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            Our Service
                        </span>
                        <AnimatedText>
                            {`At AIXOR, we offer tailored creative solutions to elevate your brand and drive success, exceeding your expectations with our expert team's dedicated services.`}
                        </AnimatedText>
                    </div>
                </div>
                <div className="service-lists-wrap">
                    <div className="service-lists-header">
                        <div className="custom-container">
                            <div className="service-header-th">
                                <img src={arrowDown} alt="icon" />
                                Service
                            </div>
                            <div className="service-header-th">
                                <img src={arrowDown} alt="icon" />
                                Features
                            </div>
                            <div className="service-header-th">
                                <img src={arrowDown} alt="icon" />
                                3D Illustration
                            </div>
                        </div>
                    </div>

                    {/* Service Lists */}
                    <div className="service-lists">
                        {ServicesV1Data.map(services =>
                            <SingleServicesV1 services={services} key={services.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV1;