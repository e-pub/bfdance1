import Union from "/assets/images/Union.svg"
import shape from "/assets/images/shape.svg"
import logo1 from "/assets/images/logo-1.png"
import btnArrow from "/assets/images/btn-arrow.svg"
import { Link } from "react-router-dom";
import TeamV1Data from "../../jsonData/team/TeamV1Data.json"
import SingleTeamV1 from "./SingleTeamV1"

const TeamV1 = () => {
    return (
        <>
            <div className="team-sec" id="team">
                <div className="section-header">
                    <span className="section-subtitle">
                        <img src={Union} alt="icon" />
                        OUR MEMBERS
                    </span>
                </div>

                <div className="team-members">
                    {TeamV1Data.map(member =>
                        <SingleTeamV1 member={member} key={member.id} />
                    )}

                    {/* Join Us Section */}
                    <div className="team-cv-box" data-aos="fade-up" data-aos-delay={400}>
                        <img src={shape} alt="shape" className="overlay" />
                        <div className="team-cv-header">
                            <img src={logo1} alt="logo" />
                            <h3 className="title">Become Our <br />Member?</h3>
                            <p>Join the AIXOR community and unlock a world of creative possibilities.</p>
                        </div>
                        <div className="team-cv-footer">
                            <Link to="/contact" className="theme-btn">
                                Apply CV
                                <img src={btnArrow} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV1;