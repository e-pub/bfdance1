import rating from "/assets/images/rating.svg";

interface DataType {
    id?: number;
    text?: string;
    thumb?: string;
    name?: string;
    designation?: string;
}

const SingleTestimonialV1 = ({ testimonial }: { testimonial: DataType }) => {
    const { text, thumb, name, designation } = testimonial

    return (
        <>
            <div className="testimonial-box">
                <img src={rating} alt="icon" />
                <div className="testimonial-content">
                    <p>“{text}”</p>
                </div>
                <div className="testimonial-author">
                    <img src={`/assets/images/${thumb}`} alt="testimonial" />
                    <div className="content">
                        <span className="name">{name}</span>
                        <span className="designation">{designation}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV1;