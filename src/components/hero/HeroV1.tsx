import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import btnArrowIcon from "/assets/images/btn-arrow.svg";
import videoSrc from "@/vod/vod-main.mp4"; // ✅ `src` 폴더에서 불러오기

const HeroV1 = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);

    // ✅ `localStorage`에서 이전 음소거 상태 가져오기
    const [isMuted, setIsMuted] = useState(() => {
        return localStorage.getItem("videoMuted") === "false";
    });

    useEffect(() => {
        if (videoRef.current) {
            /* videoRef.current.muted = isMuted; */
            videoRef.current.loop = true;

            // ✅ 브라우저 리로드 시 무조건 영상 재생 (mute 설정과 상관없이)
            let attempts = 0;
            const tryPlay = async () => {
                try {
                    await videoRef.current?.play();
                    console.log("🎬 Video autoplay successful");
                } catch (error) {
                    attempts++;
                    if (attempts < 10) {
                        console.warn(`🚨 Video autoplay failed (${attempts}), retrying...`);
                        setTimeout(tryPlay, 100);
                    } else {
                        console.error("🚨 Video autoplay failed after 10 attempts:", error);
                    }
                }
            };

            tryPlay();

            // ✅ 탭 전환 시 다시 재생되도록 설정
            const handleVisibilityChange = () => {
                if (!document.hidden && videoRef.current?.paused) {
                    tryPlay();
                }
            };

            document.addEventListener("visibilitychange", handleVisibilityChange);
            return () => {
                document.removeEventListener("visibilitychange", handleVisibilityChange);
            };
        }
    }, [isMuted]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const maxScroll = 500;
            const overlayOpacity = Math.min(scrollTop / maxScroll, 0.8); // ✅ 최대 0.8까지 어두워짐

            if (overlayRef.current) {
                overlayRef.current.style.backgroundColor = `rgba(0, 0, 0, ${overlayOpacity})`;
            }

            // ✅ 스크롤 시 소리가 서서히 사라지도록 설정 (1초간 fade-out 후 완전 제거)
            if (videoRef.current && !isMuted) {
                if (scrollTop > maxScroll) {
                    const fadeOut = setInterval(() => {
                        if (videoRef.current?.volume && videoRef.current.volume > 0) {
                            videoRef.current.volume = Math.max(videoRef.current.volume - 0.1, 0);
                        } else {
                            clearInterval(fadeOut);
                        }
                    }, 100);
                } else {
                    if (videoRef.current?.volume !== undefined) {
                        videoRef.current.volume = 1;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMuted]);

    // ✅ 음소거 토글 함수 (Mute 상태 변경 및 localStorage에 저장)
    const toggleMute = () => {
        if (videoRef.current) {
            const newMuteState = !videoRef.current.muted;
            videoRef.current.muted = newMuteState;
            setIsMuted(newMuteState);
            localStorage.setItem("videoMuted", String(newMuteState));
        }
    };

    return (
        <>
            {/* ✅ MP4 배경 영상 */}
            <div className="hero-video">
                <video 
                    ref={videoRef} 
                    className="fullscreen-video" 
                    src={videoSrc}  
                    autoPlay 
                    loop 
                    playsInline 
                    muted={isMuted} // ✅ Mute 상태 유지
                    onError={() => console.error("🚨 비디오를 불러올 수 없습니다. 경로를 확인하세요!")}
                />
                {/* ✅ 스크롤 시 어두워지는 Overlay */}
                <div className="video-overlay" ref={overlayRef}></div>
            </div>

            {/* ✅ 음소거 버튼 */}
            <button className="mute-toggle" onClick={toggleMute}>
                {isMuted ? "🔇 Mute Off" : "🔊 Mute On"}
            </button>

            {/* ✅ Hero Section (비디오 위에 표시) */}
            <div className="hero-sec" id="hero">
                <div className="custom-container">
                    <div className="hero-inner">
                        <div className="hero-top">
                            <div className="hero-top-desc">
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
