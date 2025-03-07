import { Link } from "react-router-dom";
import useHoverEffect from "../../hooks/useHoverEffect";

interface DataType {
    id?: number;
    thumb?: string;
    name?: string;
    textFirst?: string;
    textLast?: string;
    info?: string;
    date?: string;
    delay?: string;
}

const SingleFeatureV2 = ({ feature }: { feature: DataType }) => {
    const { id, thumb, name, textFirst, textLast, info, date, delay } = feature

    const { containerRef, hoverElementRef } = useHoverEffect();

    return (
        <>
            <div className="feature-project-single">
                <div className="feature-project" data-aos="fade-up" data-aos-delay={delay} ref={containerRef}>
                    <div className="hover_mouse" ref={hoverElementRef}>
                        <Link to={`/project-details/${id}`}>View</Link>
                    </div>
                    <div className="img-box">
                        <img src={`/assets/images/${thumb}`} alt="image" />
                    </div>
                    <div className="feature-project-infos">
                        <div className="feature-project-info-box">
                            <span className="title">Project Name:</span>
                            <Link to={`/project-details/${id}`}>
                                <span className="subtitle">{name}</span>
                            </Link>
                        </div>
                        <div className={`feature-project-info-box ${textFirst === '' || textLast === '' ? 'd-none' : ''}`}>
                            <span className="title">Description</span>
                            <span className="subtitle">{textFirst}<br />{textLast}</span>
                        </div>
                        <div className="feature-project-info-box">
                            <span className="title">Industry:</span>
                            <span className="subtitle">{info}</span>
                        </div>
                        <div className={`feature-project-info-box ${date === '' ? 'd-none' : ''}`}>
                            <span className="title">Release Date:</span>
                            <span className="subtitle">{date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleFeatureV2;