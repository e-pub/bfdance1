import { Link } from "react-router-dom";
import useHoverEffect from "../../hooks/useHoverEffect";

interface DataType {
    id?: number;
    thumb?: string;
    title?: string;
    date?: string;
    delay?: string;
}

const SingleFeatureV3 = ({ feature }: { feature: DataType }) => {
    const { id, thumb, title, date, delay } = feature

    const { containerRef, hoverElementRef } = useHoverEffect();

    return (
        <>
            <div className="feature-project-single">
                <div className="feature-project" data-aos="fade-up" data-aos-delay={delay} ref={containerRef}>
                    <div className="hover_mouse" ref={hoverElementRef}>
                        <Link to={`/blog-details/${id}`}>View</Link>
                    </div>
                    <div className="img-box">
                        <img src={`/assets/images/${thumb}`} alt="image" />
                    </div>
                    <div className="feature-project-infos">
                        <div className="feature-project-info-box">
                            <span className="title">Title:</span>
                            <Link to={`/blog-details/${id}`}>
                                <span className="subtitle">{title}</span>
                            </Link>
                        </div>
                        <div className="feature-project-info-box">
                            <span className="title">Date:</span>
                            <span className="subtitle">{date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleFeatureV3;