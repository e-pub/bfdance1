import btnArrow from "/assets/images/btn-arrow.svg"
import footerBigLogo from "/assets/images/footer-big-logo.png"
import { Link } from "react-router-dom";

const FooterV1 = () => {
    return (
        <>
            <footer className="footer-area">
                <div className="footer-top">
                    <div className="row">

                        {/* Company Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-widget-top">
                                    <h4>COMPANY</h4>
                                    <ul>
                                        <li>
                                            <Link className="with-border" to="/about">
                                                <img src={btnArrow} alt="icon" /> About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" to="/about">
                                                <img src={btnArrow} alt="icon" /> Members
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" to="/about">
                                                <img src={btnArrow} alt="icon" /> Stories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" to="/projects">
                                                <img src={btnArrow} alt="icon" /> Projects
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright">
                                    &copy; {(new Date().getFullYear())} ALL RIGHTS RESERVED
                                </div>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-contact-infos">
                                    <div className="footer-widget-top">
                                        <h4>REACH OUT TO US</h4>
                                        <div className="links">
                                            <div className="split-text-anim">
                                                <a data-aos="slide-up" data-aos-duration={700} href="tel:+840123456789" className="with-border">(+84) 0123456789</a>
                                            </div>
                                            <div className="split-text-anim">
                                                <a data-aos="slide-up" data-aos-duration={700} href="mailto:MindBlowingArt2692@gmail.com" className="with-border">MindBlowingArt2692@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="theme-btn">
                                        {`Let's Connect`}
                                        <img src={btnArrow} alt="icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Social Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-widget-top">
                                    <h4>Social</h4>
                                    <ul>
                                        <li>
                                            <a className="with-border" href="https://instagram.com/" target="_blank">
                                                <img src={btnArrow} alt="icon" /> Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href="https://twitter.com/" target="_blank">
                                                <img src={btnArrow} alt="icon" /> Twitter
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href="https://behance.com/" target="_blank">
                                                <img src={btnArrow} alt="icon" /> Behance
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href="https://dribbble.com/" target="_blank">
                                                <img src={btnArrow} alt="icon" /> Dribbble
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright">
                                    BASED IN HANOI, VIETNAM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="split-text-anim">
                        <img data-aos="slide-up" data-aos-duration={700} src={footerBigLogo} alt="logo" />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;