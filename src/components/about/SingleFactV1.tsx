import { Link } from "react-router-dom";
import angleIcon from "/assets/images/angle-icon-1.svg"

interface DataType {
    id?: number;
    activeClass?: string;
    thumb?: string;
    delay?: string;
    title?: string;
    end?: string;
}

const SingleFactV1 = ({ fact }: { fact: DataType }) => {
    const { id, activeClass, thumb, delay, title, end } = fact

    return (
        <>
            <div data-aos="fade-up" data-aos-delay={delay} className={`funfact-box ${activeClass}`}>
                <img src={`/assets/images/${thumb}`} alt="funfact" className="overlay" />
                <div className="funfact-header">
                    <span className="title">{title}</span>
                </div>
                <div className="funfact-footer">
                    <span className="number">{end}<span>+</span></span>
                    <Link to={`/service-details/${id}`}>
                        <img src={angleIcon} alt="icon" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleFactV1;