import unionIcon from "/assets/images/Union.svg"
import AnimatedText from "../animated/AnimatedText"
import FactData from "../../jsonData/fact/FactData.json"
import SingleFactV1 from "./SingleFactV1"

const AboutV1 = () => {
    return (
        <>
            <div className="about-sec" id="about">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={unionIcon} alt="About Us" /> About Us
                        </span>
                        <AnimatedText>
                            Founded on the principles of creativity, collaboration, and excellence, AIXOR is a diverse team of industry experts dedicated to delivering outstanding results...
                        </AnimatedText>
                    </div>
                    <div className="funfacts-wrap">
                        {FactData.map(fact =>
                            <SingleFactV1 fact={fact} key={fact.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;