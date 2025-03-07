import { Link } from "react-router-dom";
import logo1 from "/assets/images/logo-1.png"

const HeaderMenu = () => {
    return (
        <>
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
                                        <li><Link to="/team-details/1">Team Single</Link></li>
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

export default HeaderMenu;