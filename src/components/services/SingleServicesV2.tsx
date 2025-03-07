interface DataType {
    activeClass?: string;
    thumb?: string;
    text?: string;
    title?: string;
}

const SingleServicesV2 = ({ service }: { service: DataType }) => {
    const { thumb, title, text, activeClass } = service

    return (
        <>
            <div className={`service-box ${activeClass}`}>
                <div className="service-inner">
                    <div className="service-img-box">
                        <img src={`/assets/images/${thumb}`} alt="image" />
                    </div>
                    <div className="service-feature-description">
                        <h4 className="title">{title}</h4>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleServicesV2;