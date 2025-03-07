import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        const splitTextManually = (element: HTMLElement) => {
            const text = element.textContent || "";
            element.innerHTML = ""; // Clear the text content
            const words = text.split(" "); // Split into words

            words.forEach((word, i) => {
                const wordSpan = document.createElement("span");
                wordSpan.style.display = "inline-block";
                wordSpan.style.overflow = "hidden";
                wordSpan.className = "word";

                const chars = word.split(""); // Split each word into characters
                chars.forEach((char) => {
                    const charSpan = document.createElement("span");
                    charSpan.textContent = char;
                    charSpan.style.display = "inline-block";
                    charSpan.className = "char";
                    wordSpan.appendChild(charSpan);
                });

                element.appendChild(wordSpan);

                // Add a space after the word unless it's the last word
                if (i < words.length - 1) {
                    const space = document.createTextNode(" ");
                    element.appendChild(space);
                }
            });
        };

        const elements = document.querySelectorAll(".reveal-type");
        elements.forEach((el) => {
            splitTextManually(el as HTMLElement);

            const chars = el.querySelectorAll(".char");
            gsap.from(chars, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "top -10%",
                    scrub: true,
                    markers: false,
                },
                opacity: 0.2,
                stagger: 0.05,
            });
        });

        // Cleanup function to restore original content
        return () => {
            elements.forEach((el) => {
                (el as HTMLElement).textContent = el.textContent; // Restore original text
            });
        };
    }, []);

    return <h3 className="section-title reveal-type">{children}</h3>;
};

export default AnimatedText;
