import sidebarbg from "/assets/images/sidebarbg.png";
import SocialShareV1 from "../social/SocialShareV1";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "/assets/images/logo-1.png";
import useNotchScrollLink from "../../hooks/useNotchScrollLink";

const HeaderV3 = () => {

    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isHamburgActive, setIsHamburgActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsHamburgActive(window.scrollY >= 100);
        };

        // Attach event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleHamburgClick = () => {
        setIsSidebarActive(true);
        document.body.style.overflow = "hidden";
    };

    const handleCloseClick = () => {
        setIsSidebarActive(false);
        document.body.style.overflow = "auto";
    };

    useNotchScrollLink(".notch-bar-menu-wrap", "a[href^='#']");

    return (
        <>
            {/* hamburg-menu */}
            <div className="scroll-to-show-menu">
                <span className={`hamburg-menu ${isHamburgActive ? "active" : ""}`} onClick={handleHamburgClick}>
                    <span />
                    <span />
                    <span />
                </span>
            </div>

            {/* Sidebar */}
            <div className={`header-sidebar-wrap ${isSidebarActive ? "active" : ""}`}>
                <div className="header-sidebar-content">
                    <span className="close-header-sidebar" onClick={handleCloseClick}>
                        <i className="las la-times" />
                    </span>

                    {/* Sidebar image */}
                    <img src={sidebarbg} alt="sidebar" className="sidebar-shape" />
                    <div className="header-sidebar-top">
                        <ul>
                            <li>
                                <span>Based in Hanoi,</span>
                                <a href="mailto:email@example.com">E: MindBlowingArt2692@gmail.com</a>
                            </li>
                            <li>
                                <span>VietNam</span>
                                <a href="tel:+1234567890">(+84) 0123456789</a>
                            </li>
                        </ul>
                    </div>

                    {/* Sidebar menu */}
                    <nav className="sidebar-menu">
                        <ul className="menu" id="sidebar-menu-id">
                            <li>
                                <a href="#about" onClick={handleCloseClick}>About Us</a>
                            </li>
                            <li>
                                <a href="#services" onClick={handleCloseClick}>Services</a>
                            </li>
                            <li>
                                <a href="#projects" onClick={handleCloseClick}>Projects</a>
                            </li>
                            <li>
                                <a href="#awards" onClick={handleCloseClick}>Awards</a>
                            </li>
                            <li>
                                <a href="#team" onClick={handleCloseClick}>Members</a>
                            </li>
                            <li>
                                <a href="#pricing" onClick={handleCloseClick}>Pricing</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={handleCloseClick}>Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-sidebar-bottom">
                        <ul>
                            <SocialShareV1 />
                        </ul>
                    </div>
                </div>
            </div>

            {/* Notch Bar Menu Wrap */}
            <div className="notch-bar-menu-wrap">
                <ul>
                    <li><a className="anchor active" href="#hero">Hero</a></li>
                    <li><a className="anchor" href="#about">About</a></li>
                    <li><a className="anchor" href="#services">Services</a></li>
                    <li><a className="anchor" href="#projects">Projects</a></li>
                    <li><a className="anchor" href="#awards">Awards</a></li>
                    <li><a className="anchor" href="#team">Team</a></li>
                    <li><a className="anchor" href="#pricing">Pricing</a></li>
                    <li><a className="anchor" href="#contact">Contact</a></li>
                </ul>
            </div>

            {/* Sidebar 2 */}
            <div className={`header-sidebar-wrap ${isSidebarActive ? "active" : ""}`}>
                <div className="header-sidebar-content">
                    <span className="close-header-sidebar" onClick={handleCloseClick}>
                        <i className="las la-times" />
                    </span>

                    {/* Sidebar image */}
                    <img src={sidebarbg} alt="sidebar" className="sidebar-shape" />
                    <div className="header-sidebar-top">
                        <ul>
                            <li>
                                <span>Based in Hanoi,</span>
                                <a href="mailto:email@example.com">E: MindBlowingArt2692@gmail.com</a>
                            </li>
                            <li>
                                <span>VietNam</span>
                                <a href="tel:+1234567890">(+84) 0123456789</a>
                            </li>
                        </ul>
                    </div>

                    {/* Sidebar menu */}
                    <nav className="sidebar-menu">
                        <ul className="menu" id="sidebar-menu-id">
                            <li>
                                <a href="#about" onClick={handleCloseClick}>About Us</a>
                            </li>
                            <li>
                                <a href="#services" onClick={handleCloseClick}>Services</a>
                            </li>
                            <li>
                                <a href="#projects" onClick={handleCloseClick}>Projects</a>
                            </li>
                            <li>
                                <a href="#awards" onClick={handleCloseClick}>Awards</a>
                            </li>
                            <li>
                                <a href="#team" onClick={handleCloseClick}>Members</a>
                            </li>
                            <li>
                                <a href="#pricing" onClick={handleCloseClick}>Pricing</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={handleCloseClick}>Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-sidebar-bottom">
                        <ul>
                            <SocialShareV1 />
                        </ul>
                    </div>
                </div>
            </div>

            {/* header-menu-wrap */}
            <header className="header-menu-wrap">
                <div className="custom-container">
                    <div className="custom-row">

                        <Link to="/" className="logo">
                            <img src={logo1} alt="logo" />
                        </Link>

                        {/* Navigation menu */}
                        <nav className="navbar">
                            <ul className="menu">
                                <li>
                                    <Link to="/">Home <span /></Link>
                                </li>
                                <li>
                                    <Link to="/projects">Projects <span>(7)</span></Link>
                                </li>
                                <li>
                                    <Link to="/about">About Us <span /></Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact <span /></Link>
                                </li>
                                <li className="dropdown-menu-item">
                                    <Link to="#">All Pages <i className="las la-angle-down" /></Link>
                                    <ul className="dropdown-list">
                                        <li><Link to="/">Home - Ham Menu</Link></li>
                                        <li><Link to="/home-2">Home - Notch Menu</Link></li>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/projects">Projects</Link></li>
                                        <li><Link to="/project-details/1">Project Single</Link></li>
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="/blog-details/1">Blog Detail</Link></li>
                                        <li><Link to="/service-details/1">Service Single</Link></li>
                                        <li><Link to="/faq">Faq</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/not-found">404</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>

                        {/* Header right info */}
                        <div className="header-right-info">
                            <a className="with-border" href="tel:+1234567890">(+84) 0123456789</a>
                            <a href="mailto:example@gmail.com">
                                <i className="iconoir-mail-out" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderV3;