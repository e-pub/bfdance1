import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    thumb?: string;
    name?: string;
    designation?: string;
    text?: string;
    delay?: number;
}

const SingleTeamV1 = ({ member }: { member: DataType }) => {
    const { id, thumb, name, designation, text, delay } = member;

    return (
        <>
            <div className="team-member-box" data-aos="fade-up" data-aos-delay={delay}>
                <div className="img-box">
                    <Link to={`/team-details/${id}`}>
                        <img src={`/assets/images/${thumb}`} alt="team-img" />
                    </Link>
                </div>
                <div className="content">
                    <Link to={`/team-details/${id}`}>
                        <span className="name">{name}</span>
                    </Link>
                    <span className="designation">{designation}</span>
                    <div className="shape"><span /></div>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV1;