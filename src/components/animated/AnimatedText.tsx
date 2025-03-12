import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ children }: { children: React.ReactNode }) => {
    const textRef = useRef<HTMLDivElement | null>(null);
    const gsapContext = useRef<gsap.Context | null>(null);

    useEffect(() => {
        const el = textRef.current;
        if (!el) return;

        gsapContext.current?.revert();
        gsapContext.current = gsap.context(() => {
            const paragraphs = Array.from(el.children) as HTMLElement[];

            paragraphs.forEach((p) => {
                const chars = p.textContent?.split("") ?? [];
                p.innerHTML = ""; // ✅ 기존 내용 초기화

                chars.forEach((char) => {
                    const charSpan = document.createElement("span");
                    charSpan.className = "char";
                    charSpan.textContent = char;
                    charSpan.style.display = "inline-block";
                    charSpan.style.color = "#ddd";
                    charSpan.style.opacity = "0.6"; // ✅ 초기 상태 유지
                    p.appendChild(charSpan);
                });
            });

            const chars = el.querySelectorAll(".char");

            gsap.fromTo(
                chars,
                { opacity: 0.2, color: "#ddd" }, // ✅ 초기 상태
                {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 0.5,
                        markers: false,
                    },
                    opacity: 1,
                    color: "#fff",
                    stagger: 0.05,
                }
            );
        }, el);

        return () => gsapContext.current?.revert();
    }, []);

    return <div ref={textRef} className="txt_sec reveal-type">{children}</div>;
};

export default AnimatedText;
