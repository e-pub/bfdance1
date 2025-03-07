import { Link } from "react-router-dom";
import Union from "/assets/images/Union.svg"
import pricingNavbar from "/assets/images/pricing-navbar.svg"
import pricingShape1 from "/assets/images/pricing-shape1.png"
import pricingShape2 from "/assets/images/pricing-shape2.png"
import btnArrow from "/assets/images/btn-arrow.svg"
import featuredIcon from "/assets/images/featured-icon.svg"
import { useRef } from "react";
import useTabIndicator from "../../hooks/useTabIndicator";

const PriceV1 = () => {

    const indicatorRef = useRef<HTMLSpanElement>(null);
    const navRef = useRef<HTMLUListElement>(null);
    useTabIndicator({ navRef, indicatorRef });


    return (
        <>
            <div className="pricing-sec" id="pricing">
                <div className="custom-container">
                    <div className="section-header section-header2">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            PRICING PLANS
                        </span>
                        <h2 className="section-title section-title2">
                            Flexible Plans, <span>Powerful Results</span>
                        </h2>
                        <p className="section-desc">
                            {`Whether you're a startup looking for a boost or an established brand aiming to elevate your presence,`}<br />
                            we have a plan that fits your goals and budget.
                        </p>
                    </div>
                    <div className="pricing_nav_wrap">
                        <ul className="pricing_nav nav-tabs" id="myTab" role="tablist" ref={navRef}>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="monthly-tab" data-bs-toggle="tab" data-bs-target="#monthly" type="button" role="tab" aria-controls="monthly" aria-selected="true">Monthly</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="annual-tab" data-bs-toggle="tab" data-bs-target="#annual" type="button" role="tab" aria-controls="annual" aria-selected="false">Annual <span>-20%</span></button>
                            </li>
                        </ul>
                        <span className="nav-hover-shape" ref={indicatorRef} style={{ left: 439, opacity: 1 }}>
                            <img src={pricingNavbar} alt="shape" />
                        </span>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                            <div className="pricing-lists">
                                <div className="shape_img shape_img1">
                                    <img src={pricingShape1} alt="shape" />
                                </div>
                                <div className="shape_img shape_img2">
                                    <img src={pricingShape2} alt="shape" />
                                </div>
                                <div className="pricing-box" data-aos="fade-up">
                                    <div className="pricing-header">
                                        <span className="title">Standard Plan</span>
                                        <h3 className="price">$3.500<span>/month</span></h3>
                                        <p className="content">
                                            <span className="required">*</span> Ideal for growing businesses that need more advanced solutions.
                                        </p>
                                        <ul className="feature-lists">
                                            <li><span className="icon"><i className="las la-check" /></span> Custom website design</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Basic SEO optimisation</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Social media setup</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Monthly performance reports</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Email support</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link to="#" className="theme-btn">
                                            {`Let's Start Now`} <img src={btnArrow} alt="icon" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="pricing-box" data-aos="fade-up" data-aos-delay={200}>
                                    <span className="pricing-featured-icon">
                                        <img src={featuredIcon} alt="icon" />
                                    </span>
                                    <div className="pricing-header">
                                        <span className="title">Professional Plan</span>
                                        <h3 className="price">$6.500<span>/month</span></h3>
                                        <p className="content">
                                            <span className="required">*</span> Ideal for growing businesses that need more advanced solutions.
                                        </p>
                                        <ul className="feature-lists">
                                            <li><span className="icon"><i className="las la-check" /></span> Everything in Standard Plan</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Advanced SEO and keyword targeting</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Content creation and blog management</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Social media management and advertising</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Priority email and phone support</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link to="/contact" className="theme-btn">
                                            {`Let's Start Now`} <img src={btnArrow} alt="icon" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="annual" role="tabpanel" aria-labelledby="annual-tab">
                            <div className="pricing-lists">
                                <div className="shape_img shape_img1">
                                    <img src={pricingShape1} alt="shape" />
                                </div>
                                <div className="shape_img shape_img2">
                                    <img src={pricingShape2} alt="shape" />
                                </div>
                                <div className="pricing-box" data-aos="fade-up">
                                    <div className="pricing-header">
                                        <span className="title">Standard Plan</span>
                                        <h3 className="price">$1,500<span>/month</span></h3>
                                        <p className="content">
                                            <span className="required">*</span> Ideal for growing businesses that need more advanced solutions.
                                        </p>
                                        <ul className="feature-lists">
                                            <li><span className="icon"><i className="las la-check" /></span> Custom website design</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Basic SEO optimisation</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Social media setup</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Monthly performance reports</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Email support</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link to="/contact" className="theme-btn">
                                            {`Let's Start Now`} <img src={btnArrow} alt="icon" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="pricing-box" data-aos="fade-up" data-aos-delay={200}>
                                    <span className="pricing-featured-icon">
                                        <img src={featuredIcon} alt="icon" />
                                    </span>
                                    <div className="pricing-header">
                                        <span className="title">Professional Plan</span>
                                        <h3 className="price">$6,500<span>/month</span></h3>
                                        <p className="content">
                                            <span className="required">*</span> Ideal for growing businesses that need more advanced solutions.
                                        </p>
                                        <ul className="feature-lists">
                                            <li><span className="icon"><i className="las la-check" /></span> Everything in Standard Plan</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Advanced SEO and keyword targeting</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Content creation and blog management</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Social media management and advertising</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Priority email and phone support</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link to="/contact" className="theme-btn">
                                            {`Let's Start Now`} <img src={btnArrow} alt="icon" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV1;