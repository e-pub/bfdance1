import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import btnArrowIcon from "/assets/images/btn-arrow.svg";
import videoSrc from "@/vod/vod-main.mp4";

const HeroV1 = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const [isMuted, setIsMuted] = useState(() => localStorage.getItem("videoMuted") !== "true");

    useEffect(() => {
        const video = videoRef.current;
        video?.play().catch(() => {});

        const handleVisibilityChange = () => document.hidden || video?.paused && video?.play();
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, [isMuted]);

    useEffect(() => {
        const handleScroll = () => {
            const video = videoRef.current;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const maxScroll = 500;
            const overlayOpacity = Math.min(scrollTop / maxScroll, 0.8);
            overlayRef.current?.style.setProperty("background-color", `rgba(0, 0, 0, ${overlayOpacity})`);

            const targetVolume = 1 - Math.min(scrollTop / maxScroll, 1);
            const step = (targetVolume - (video?.volume || 0)) * 0.1;
            video?.volume !== undefined && requestAnimationFrame(() => video.volume += step);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMuted]);

    const toggleMute = () => {
        const video = videoRef.current;
        const newMuteState = !isMuted;
        video?.muted && (video.muted = false);
        video?.volume !== undefined && (video.volume = newMuteState ? 0 : 1);
        setIsMuted(newMuteState);
        localStorage.setItem("videoMuted", String(newMuteState));
    };

    return (
        <>
            <div className="hero-video">
                <video
                    ref={videoRef}
                    className="fullscreen-video"
                    src={videoSrc}
                    autoPlay
                    loop
                    playsInline
                    muted
                    onCanPlay={() => videoRef.current?.muted === false && (videoRef.current.volume = isMuted ? 0 : 1)}
                />
                <div className="video-overlay" ref={overlayRef}></div>
            </div>

            <button className="mute-toggle" onClick={toggleMute}>
                {isMuted ? "🔇 Mute Off" : "🔊 Mute On"}
            </button>

            <div className="hero-sec" id="hero">
                <div className="custom-container">
                    <div className="hero-inner">
                        <div className="hero-top" />
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>Bounce Factory</h2>
                                <h2>Dance Studio</h2>
                            </div>

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
