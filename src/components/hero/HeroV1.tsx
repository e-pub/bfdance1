import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import btnArrowIcon from "/assets/images/btn-arrow.svg";

const HeroV1 = () => {
    const videoId = "RU6YKtSCNi4"; // ✅ 초기 YouTube 영상 ID
    const [isMuted, setIsMuted] = useState(true); // ✅ 기본 음소거
    const [iframeSrc, setIframeSrc] = useState(
        `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0`
    );

    // ✅ 소리 토글 함수 (버튼 클릭 시 `src` 업데이트)
    const toggleMute = () => {
        setIsMuted((prev) => !prev);
        setIframeSrc(
            `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? "0" : "1"}&loop=1&playlist=${videoId}&controls=0`
        );
    };

    // ✅ 동적 크기 조절 함수
    useEffect(() => {
        const updateSize = (iframe: HTMLIFrameElement | null) => {
            if (!iframe) return;
            const aspectRatio = 16 / 9;
            const { innerWidth: w, innerHeight: h } = window;
            const scale = Math.max(w / (h * aspectRatio), h / (w / aspectRatio));

            Object.assign(iframe.style, {
                width: `${w * scale}px`,
                height: `${h * scale}px`,
            });
        };

        const iframe = document.querySelector(".fullscreen-video") as HTMLIFrameElement | null;
        updateSize(iframe);

        const handleResize = () => updateSize(document.querySelector(".fullscreen-video") as HTMLIFrameElement | null);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {/* ✅ YouTube 배경 영상 */}
            <div className="hero-video">
                <iframe
                    className="fullscreen-video"
                    src={iframeSrc}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
                    allowFullScreen
                ></iframe>

                {/* ✅ 음소거 버튼 */}
                <button className="mute-toggle" onClick={toggleMute} style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    background: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    border: "none",
                    padding: "10px",
                    cursor: "pointer",
                    borderRadius: "5px",
                }}>
                    {isMuted ? "🔇 Mute" : "🔊 Unmute"}
                </button>
            </div>

            {/* ✅ Hero Section */}
            <div className="hero-sec" id="hero">
                <div className="custom-container">
                    <div className="hero-inner">
                        <div className="hero-top">
                            <div className="hero-top-desc">
                                <p>바운스팩토리스튜디오는 [안양예술공원] 인근에 위치해 있습니다.</p>
                                <p>아이돌교육 전문 교수님들이 소수정예로 기초부터 튼튼히 하여 다양한 안무를 잘 소화할 수 있게 해줍니다.</p>
                                <p>어떤 목적이든 맞춤으로 교육받을 수 있는 개인교습도 가능하며, 수강생들은 연습도 할 수 있습니다.</p>
                                <p>대관 시스템이 있어 쾌적하고 분위기 좋은 연습실을 저렴하게 이용할 수 있습니다.</p>
                            </div>

                            <div className="author-info">
                                <h4>Ahshan M</h4>
                                <span>Chief Executive Officer</span>
                            </div>
                        </div>

                        {/* ✅ Hero Bottom Section */}
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>Bounce Factory</h2>
                                <h2>Dance Studio</h2>
                            </div>

                            {/* ✅ Button Section */}
                            <Link to="/contact" className="theme-btn">
                                {`Let's Connect`}
                                <img src={btnArrowIcon} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV1;
