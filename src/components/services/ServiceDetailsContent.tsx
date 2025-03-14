/* 다양한 수업방식 */
import Union from '/assets/images/Union.svg';
import AnimatedText from "../animated/AnimatedText";
import { Link } from "react-router-dom";
import btnArrow from '/assets/images/btn-arrow.svg';
import useScaleDownAnimation from '../../hooks/useScaleDownAnimation';

interface DataType {
    name?: string;
    thumbFull1?: string;
    thumbFull2?: string;
    text?: string;
    price?: string;
}

const ServiceDetailsContent = ({ serviceData }: { serviceData: DataType }) => {
    const { name, thumbFull2 } = serviceData;
    const containerRef = useScaleDownAnimation('.scaleDown');

    return (
        <>
            <div className="project-single-wrap service-single-wrap">
                <div className="project-single-header">
                    <div className="section-header">
                        <h2 className="tit_sec">{name}</h2>
                        <AnimatedText>
                           <h3 className="txt_sec">[바운스팩토리 댄스스튜디오]는 "Choreography:코레오그라피 안무", "K-POP: 최신곡 커버댄스", "힙합기초반", "케이팝기초반", "취미/기초반", "키즈케이팝기초반", "키즈 기초반" 등 각자에게 특화된 교육을 진행하고 있습니다.</h3>
                        </AnimatedText>
                    </div>
                </div>
                <div className="project-single-body">
                    <div className="feature-project">
                        <div className="img-box">
                            <table className="tb-reg">
                                <thead>
                                    <tr>
                                        <th><p>시간</p>Time</th>
                                        <th><p>월</p>Mon.</th>
                                        <th><p>화</p>Tue.</th>
                                        <th><p>수</p>Wed.</th>
                                        <th><p>목</p>Thu.</th>
                                        <th><p>금</p>Fri.</th>
                                        <th><p>토</p>Sat.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><p>11:00 ~ 12:00</p>오전</td>
                                        <td><p>취미/기초반</p>Hobby/Basic</td>
                                        <td><p>취미/기초반</p>Hobby/Basic</td>
                                        <td><p>취미/기초반</p>Hobby/Basic</td>
                                        <td><p>취미/기초반</p>Hobby/Basic</td>
                                        <td><p>케이팝</p>K-pop</td>
                                        <td><p>케이팝</p>K-pop</td>
                                    </tr>
                                    <tr>
                                        <td><p>02:30 ~ 03:50</p>오후</td>
                                        <td><p>키즈 기초반</p>Kids Basic</td>
                                        <td><p>케이팝 키즈반</p>K-pop Kids</td>
                                        <td><p>케이팝 키즈반</p>K-pop Kids</td>
                                        <td><p>키즈 기초반</p>Kids Basic</td>
                                        <td><p>키즈 기초반</p>Kids Basic</td>
                                        <td><p>케이팝</p>K-pop</td>
                                    </tr>
                                    <tr>
                                        <td><p>07:20 ~ 08:40</p>오후</td>
                                        <td><p>케이팝</p>K-pop</td>
                                        <td><p>취미/기초반</p>Hobby/Basic</td>
                                        <td><p>케이팝</p>K-pop</td>
                                        <td><p>취미/기초반</p>Hobby/Basic</td>
                                        <td><p>케이팝</p>K-pop</td>
                                        <td><p>힙합 기초반</p>Hip-Hop Basic</td>
                                    </tr>
                                    <tr>
                                        <td><p>08:40 ~ 10:00</p>오후</td>
                                        <td><p>코레오(안무반)</p>Choreography</td>
                                        <td><p>케이팝</p>K-pop</td>
                                        <td><p>코레오(안무반)</p>Choreography</td>
                                        <td><p>케이팝</p>K-pop</td>
                                        <td><p>힙합 기초반</p>Hip-Hop Basic</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <img src={`/assets/images/${thumbFull1}`} alt="project-single" /> */}
                        </div>
                        <div className="feature-project-infos">
                            <div className="feature-project-info-box project-name">
                                <span className="title">CLASS문의 :</span>
                                <span className="subtitle">010.4587.9623</span>
                            </div>
                            <div className="feature-project-info-box project-description">
                                <span className="title">스튜디오 위치 :</span>
                                <span className="subtitle"><p>연락주시고 방문 가능하십니다.</p>안양시 만안구 경수대로 1203, 3층</span>
                            </div>
                            <div className="feature-project-info-box">
                                <span className="title">보유교사 :</span>
                                <span className="subtitle">5명</span>
                            </div>
                            <div className="feature-project-info-box">
                                <Link to="/contact" className="theme-btn">
                                    온라인문의
                                    <img src={btnArrow} alt="icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="project-single-content-wrap">
                        <div className="section-header">
                            <h2 className="tit_sec">
                                CLASS 교육 상세설명
                            </h2>
                            <div className="right">
                                <AnimatedText>
                                    <h3 className="txt_sec big"><p>코레오(안무반)</p>Choreography</h3>
                                    <p className="txt_sec">현역 아이돌을 지도하고 해외 워크샵 등 다양한 경력의 소유자인 이창민 원장이 직접 짠 안무를 전수받을 수 있습니다.</p>
                                </AnimatedText>
                            </div>
                        </div>
                        <div className="full-image" ref={containerRef}>
                            <img className="scaleDown" src={`/assets/images/${thumbFull2}`} alt="project-single" />
                        </div>
                        <div className="section-header">
                            <span className="section-subtitle">
                                <img src={Union} alt="icon" />
                                SERVICE BENEFITS
                            </span>
                            <div className="right">
                                <AnimatedText>
                                    Our brand identity services deliver significant benefits that drive your business forward. By crafting a unique and coherent brand identity, we help you stand out in a crowded marketplace.
                                </AnimatedText>
                                <div className="paragraphs">
                                    <p>Our process ensures that every visual and verbal element—from logos and color schemes to messaging and brand voice—aligns with your strategic goals, creating a unified and compelling brand presence. This alignment not only enhances recognition and fosters customer loyalty but also positions your brand as a leader in your industry.</p>
                                    <p>With our tailored solutions, you gain clarity and consistency in your brand communication, ultimately leading to increased visibility, stronger market positioning, and sustainable growth.</p>
                                </div>
                            </div>
                        </div>

                        <ul>
                            <li>I. 스트레칭/몸풀기</li>
                            <li>II. 안무 핵심동작 반복 익히기</li>
                            <li>III. 핵심동작을 첨가한 본격 안무숙지, 동작교정</li>
                            <li>IV. 영상촬영</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;