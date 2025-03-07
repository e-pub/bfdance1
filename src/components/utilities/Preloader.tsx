import aixorBigLogo from "/assets/images/aixor-big-logo.svg"

const Preloader = () => {
    return (
        <>
            <div className="preloader-wrap">
                <video loop muted autoPlay>
                    <source src="/assets/video/hero-video.mp4" type="video/mp4" />
                </video>
                <img src={aixorBigLogo} alt="Logo" />
            </div>
        </>
    );
};

export default Preloader;