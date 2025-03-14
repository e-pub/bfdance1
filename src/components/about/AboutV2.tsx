import unionIcon from "/assets/images/Union.svg"
import angleIcon from "/assets/images/angle-icon-1.svg"
import funFact from "/assets/images/fun-fact1.png"
import funFact2 from "/assets/images/fun-fact2.png"
import funFact3 from "/assets/images/fun-fact3.png"
import funFact4 from "/assets/images/fun-fact4.png"
import AnimatedText from "../animated/AnimatedText"

const AboutV2 = () => {
    return (
        <>
            <div className="about-sec" id="about">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={unionIcon} alt="About Us" /> About Us
                        </span>
                        <div className="right">
                            <AnimatedText>
                                Founded on the principles of creativity, collaboration, and excellence, AIXOR is a diverse team of industry experts dedicated to delivering outstanding results...
                            </AnimatedText>
                            <AnimatedText>
                                We are committed to pushing the boundaries of what’s possible, working together seamlessly to exceed expectations and deliver outstanding value to our clients.
                            </AnimatedText>
                        </div>
                    </div>

                    {/* Fun Facts   */}
                    <div className="funfacts-wrap">
                        <div data-aos="fade-up" className="funfact-box active">
                            <img src={funFact} alt="funfact" className="overlay" />
                            <div className="funfact-header">
                                <h4 className="title">내부내용 변경 안되는 부분</h4>
                            </div>
                            <div className="funfact-footer">
                                <span className="number">내부내용 변경 안되는 부분</span>
                                <img src={angleIcon} alt="icon" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay={200} className="funfact-box">
                            <img src={funFact2} alt="funfact" className="overlay" />
                            <div className="funfact-header">
                                <span className="title">1111</span>
                            </div>
                            <div className="funfact-footer">
                                <span className="number">11111<span>+</span></span>
                                <img src={angleIcon} alt="icon" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay={400} className="funfact-box">
                            <img src={funFact3} alt="funfact" className="overlay" />
                            <div className="funfact-header">
                                <span className="title">Award Winning</span>
                            </div>
                            <div className="funfact-footer">
                                <span className="number">110<span>+</span></span>
                                <img src={angleIcon} alt="icon" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay={600} className="funfact-box">
                            <img src={funFact4} alt="funtact" className="overlay" />
                            <div className="funfact-header">
                                <span className="title">Satisfied Clients</span>
                            </div>
                            <div className="funfact-footer">
                                <span className="number">4M<span>+</span></span>
                                <img src={angleIcon} alt="icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;