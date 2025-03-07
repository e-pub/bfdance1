import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    activeClass?: string;
    name?: string;
    thumb?: string;
    icon?: string;
}

const SingleServicesV1 = ({ services }: { services: DataType }) => {
    const { id, icon, name, thumb, activeClass } = services

    return (
        <>
            <div className={`service-box ${activeClass}`}>
                <div className="service-inner">
                    <h4 className="title">
                        <img src={`/assets/images/${icon}`} alt="icon" />
                        <Link to={`/service-details/${id}`}>{name}</Link>
                    </h4>
                    <p className="service-feature-lists">
                        <span>I. Legacy Modernization </span>
                        <span>II. Solution Design </span>
                        <span>III. Technology Enabling </span>
                        <span>IV. Mobile-First Systems</span>
                    </p>
                    <div className="service-img-box">
                        <img src={`/assets/images/${thumb}`} alt="Icon" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleServicesV1;