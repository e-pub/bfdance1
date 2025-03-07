import Union from "/assets/images/Union.svg"
import process1 from "/assets/images/process1.jpg"
import process2 from "/assets/images/process2.jpg"
import process3 from "/assets/images/process3.jpg"

const ProcessV1 = () => {
    return (
        <>
            <div className="process-sec">
                <div className="section-header section-header2">
                    <span className="section-subtitle">
                        <img src={Union} alt="icon" />
                        Our Process
                    </span>
                    <h2 className="section-title section-title2">
                        Refined Process, <span>Efficient Flow</span>
                    </h2>
                </div>
                <div className="process-lists">

                    {/* Process 1 */}
                    <div className="team-member-box process-box" data-aos="fade-up">
                        <div className="img-box">
                            <span className="number">I.</span>
                            <img src={process1} alt="Process" />
                        </div>
                        <div className="content">
                            <span className="name">Strategy</span>
                            <span className="designation">Driving Growth</span>
                            <div className="shape"><span /></div>
                            <p>Develop a focused plan with clear goals, target audiences, and actionable steps to drive success.</p>
                        </div>
                    </div>

                    {/* Process 2 */}
                    <div className="team-member-box process-box" data-aos="fade-up" data-aos-delay={200}>
                        <div className="img-box">
                            <span className="number">II.</span>
                            <img src={process2} alt="Process" />
                        </div>
                        <div className="content">
                            <span className="name">Execution</span>
                            <span className="designation">Effective Tactics</span>
                            <div className="shape"><span /></div>
                            <p>Implement the strategy effectively, track progress and make necessary adjustments to stay aligned.</p>
                        </div>
                    </div>

                    {/* Process 3 */}
                    <div className="team-member-box process-box" data-aos="fade-up" data-aos-delay={400}>
                        <div className="img-box">
                            <span className="number">III.</span>
                            <img src={process3} alt="Process" />
                        </div>
                        <div className="content">
                            <span className="name">Discover</span>
                            <span className="designation">Uncover Insights</span>
                            <div className="shape"><span /></div>
                            <p>Continuously explore valuable insights and gather feedback to refine strategies and adapt to trends.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessV1;