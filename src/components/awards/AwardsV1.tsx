import Union from "/assets/images/Union.svg"

const AwardsV1 = () => {
    return (
        <>
            <div className="awards-sec" id="awards">
                <div className="section-header">
                    <span className="section-subtitle">
                        <img src={Union} alt="icon" />
                        OUR AWARDS
                    </span>
                </div>
                <div className="awards-list">

                    {/* Award 1 */}
                    <div className="awards-box active">
                        <div className="awards-inner">
                            <div className="overlay" />
                            <h4>I. Awards Jury</h4>
                            <span className="date">2021-2024</span>
                        </div>
                    </div>

                    {/* Award 2 */}
                    <div className="awards-box">
                        <div className="awards-inner">
                            <div className="overlay" />
                            <h4>II. Studio of the Year</h4>
                            <span className="date">2023</span>
                        </div>
                    </div>

                    {/* Award 3 */}
                    <div className="awards-box">
                        <div className="awards-inner">
                            <div className="overlay" />
                            <h4>III. Cannes Lions</h4>
                            <span className="date">2022</span>
                        </div>
                    </div>

                    {/* Award 4 */}
                    <div className="awards-box">
                        <div className="awards-inner">
                            <div className="overlay" />
                            <h4>IV. Adobe Design Achievement Awards</h4>
                            <span className="date">2022-2023</span>
                        </div>
                    </div>

                    {/* Award 5 */}
                    <div className="awards-box">
                        <div className="awards-inner">
                            <div className="overlay" />
                            <h4>V. D&AD Awards</h4>
                            <span className="date">2021</span>
                        </div>
                    </div>

                    {/* Award 6 */}
                    <div className="awards-box">
                        <div className="awards-inner">
                            <div className="overlay" />
                            <h4>VI. Red Dot Design Awards</h4>
                            <span className="date">2020-2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AwardsV1;