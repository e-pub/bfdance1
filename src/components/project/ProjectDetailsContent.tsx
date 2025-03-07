import Union from '/assets/images/Union.svg';
import AnimatedText from '../animated/AnimatedText';

interface Datatype {
    thumb?: string;
    name?: string;
    info?: string;
}

const ProjectDetailsContent = ({ projectData }: { projectData: Datatype }) => {
    const { thumb, name, info } = projectData

    return (
        <>
            <div className="project-single-wrap">
                <div className="project-single-header">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            Dimension Dynamics
                        </span>
                        <AnimatedText>
                            Founded on the principles of creativity, collaboration, and excellence, AIXOR is a diverse team of industry experts dedicated to delivering outstanding results...
                        </AnimatedText>
                    </div>
                </div>
                <div className="feature-project">
                    <div className="img-box">
                        <img className="scaleDown" src={`/assets/images/${thumb}`} alt="project-single" />
                    </div>
                    <div className="feature-project-infos">
                        <div className="feature-project-info-box project-name">
                            <span className="title">Project Name:</span>
                            <span className="subtitle">{name}</span>
                        </div>
                        <div className="feature-project-info-box project-description">
                            <span className="title">Description:</span>
                            <span className="subtitle">One of our most successful projects in this area highlights our<br />ability to design and develop.</span>
                        </div>
                        <div className="feature-project-info-box">
                            <span className="title">Industry:</span>
                            <span className="subtitle">{info}</span>
                        </div>
                        <div className="feature-project-info-box">
                            <span className="title">Release Date:</span>
                            <span className="subtitle">Dec 10, 2023</span>
                        </div>
                    </div>
                </div>
                <div className="project-single-content-wrap">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            RESEARCH
                        </span>
                        <div className="right">
                            <AnimatedText>
                                Research provides data to support design decisions, helping designers make informed choices about layout, color schemes, typography, and other elements, resulting in more effective, user-friendly websites.
                            </AnimatedText>
                        </div>
                    </div>
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            DESIGN
                        </span>
                        <div className="right">
                            <AnimatedText>
                                {`Usability and Accessibility: Effective design caters to users' needs, ensuring the website is easy to navigate and understand. Intuitive navigation, clear hierarchy, and logical content organization enhance usability and accessibilit, helping users quickly find what they need.`}
                            </AnimatedText>
                        </div>
                    </div>
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            DEVELOPMENT
                        </span>
                        <div className="right">
                            <h3 className="section-title reveal-type">
                                Development: Optimizing code, reducing file sizes, and improving loading times enhance website performance. Faster loading improves user experience, lowers bounce rates, and boosts search engine rankings.
                            </h3>
                            <div className="section-desc">
                                <div className="section-desc">
                                    <p>Optimizing the website involves refining the code, reducing file sizes, and improving loading times to enhance overall performance. Efficient code and smaller files result in quicker loading speeds, which significantly enhance the user experience by reducing waiting times. A faster website not only keeps visitors engaged and decreases bounce rates but also positively impacts search engine rankings, making the site more discoverable and accessible.</p>
                                    <p>In essence, thorough development not only boosts the technical efficiency of a website but also contributes to its success by enhancing user experience, retaining visitors, and improving its online presence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="full-image">
                    <img className="scaleDown" src={`/assets/images/${thumb}`} alt="project-single" />
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsContent;