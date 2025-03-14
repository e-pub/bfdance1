import AnimatedText from "../animated/AnimatedText";
import FactData from "../../jsonData/fact/FactData.json";
import SingleFactV1 from "./SingleFactV1";

const AboutV1 = () => {
    return (
        <>
            <div className="about-sec" id="about">
                <div className="custom-container">
                    <div className="sec-head">
                        <div className="col-left">
                            <h2 className="tit_sec">
                                바운스팩토리<br/>댄스스튜디오는?
                            </h2>
                        </div>
                        <div className="col-right">
                            <h3 className="txt_sec">
                                <AnimatedText>
                                    <p>아이돌교육 전문 교수님들이 소수정예로 기초부터 튼튼히 하여 다양한 안무를 잘 소화할 수 있게 해줍니다.</p>                     
                                    <p>어떤 목적이든 맞춤으로 교육받을 수 있는 개인교습도 가능하며, 수강생들은 연습도 할 수 있습니다.</p>
                                    <p>대관 시스템이 있어 쾌적하고 분위기 좋은 연습실을 저렴하게 이용할 수 있습니다.</p>
                                </AnimatedText>
                            </h3>
                        </div>
                    </div>

                    {/* 하단박스 */}
                    <div className="funfacts-wrap">
                        {FactData.map((fact) => (
                            <SingleFactV1 fact={fact} key={fact.id} />
                        ))}
                    </div>                    
                </div>
            </div>
        </>
    );
};

export default AboutV1;
