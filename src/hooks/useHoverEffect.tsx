import { useEffect, useRef } from 'react';

interface UseHoverEffectReturn {
    containerRef: React.RefObject<HTMLDivElement>;
    hoverElementRef: React.RefObject<HTMLDivElement>;
}

const useHoverEffect = (): UseHoverEffectReturn => {
    const containerRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
    const hoverElementRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

    useEffect(() => {
        const container = containerRef.current;
        const hoverElement = hoverElementRef.current;

        if (container && hoverElement) {
            const handleMouseMove = (event: MouseEvent) => {
                const boxRect = container.getBoundingClientRect();
                const mouseX = event.clientX - boxRect.left;
                const mouseY = event.clientY - boxRect.top;

                hoverElement.style.transform = `translate3d(${mouseX - 50}px, ${mouseY - 50}px, 0)`;
                hoverElement.classList.add('active');
            };

            const handleMouseLeave = () => {
                hoverElement.classList.remove('active');
            };

            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    return { containerRef, hoverElementRef };
};

export default useHoverEffect;