import Union from '/assets/images/Union.svg';
import AnimatedText from '../animated/AnimatedText';

const Breadcrumb = () => {
    return (
        <>
            <div className="breadcrumb-sec">
                <div className="section-header">
                    <span className="section-subtitle">
                        <img src={Union} alt="icon" />
                        VISUAL CAMPAIGNS
                    </span>
                    <div className="right">
                        <AnimatedText>
                            Visual campaigns are crucial for grabbing attention and conveying messages effectively. By combining striking imagery with strategic messaging, these campaigns engage audiences and create memorable experiences.
                        </AnimatedText>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Breadcrumb;