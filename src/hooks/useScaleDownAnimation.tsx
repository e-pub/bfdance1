import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useScaleDownAnimation = (targetSelector: string) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Register ScrollTrigger with GSAP
        gsap.registerPlugin(ScrollTrigger);

        if (containerRef.current) {
            const targets = containerRef.current.querySelectorAll(targetSelector);

            if (targets.length) {
                targets.forEach((target) => {
                    gsap.fromTo(
                        target,
                        { scale: 1.5 }, // Initial scale
                        {
                            scale: 1, // Final scale
                            ease: 'none',
                            scrollTrigger: {
                                trigger: target, // Trigger for each target
                                scrub: true,
                                markers: false,
                                start: 'top top',
                                end: 'bottom top',
                            },
                        }
                    );
                });
            }
        }

        return () => {
            // Cleanup ScrollTriggers when component unmounts
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [targetSelector]);

    return containerRef;
};

export default useScaleDownAnimation;
