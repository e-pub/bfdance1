import { useEffect } from "react";

interface UseTabIndicatorProps {
    navRef: React.RefObject<HTMLUListElement | null>;
    indicatorRef: React.RefObject<HTMLSpanElement | null>;
};

const useTabIndicator = ({ navRef, indicatorRef }: UseTabIndicatorProps) => {
    useEffect(() => {
        const tabs = navRef.current?.querySelectorAll<HTMLButtonElement>(".nav-link");

        const updateIndicatorPosition = (element: HTMLButtonElement) => {
            if (indicatorRef.current) {
                const offsetLeft = element.offsetLeft;

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const width = element.offsetWidth;
                indicatorRef.current.style.left = `${offsetLeft}px`;
                indicatorRef.current.style.opacity = "1";
                // Uncomment the line below if you want the indicator to match the width of the active tab
                // indicatorRef.current.style.width = `${width}px`;
            }
        };

        const handleTabClick = (e: MouseEvent) => {
            const target = e.currentTarget as HTMLButtonElement;
            tabs?.forEach((tab) => tab.classList.remove("active"));
            target.classList.add("active");
            updateIndicatorPosition(target);
        };

        tabs?.forEach((tab) => {
            tab.addEventListener("click", handleTabClick);
        });

        // Initialize the indicator position for the active tab
        const activeTab = navRef.current?.querySelector<HTMLButtonElement>(".nav-link.active");
        if (activeTab) {
            updateIndicatorPosition(activeTab);
        }

        // Cleanup event listeners on unmount
        return () => {
            tabs?.forEach((tab) => {
                tab.removeEventListener("click", handleTabClick);
            });
        };
    }, [navRef, indicatorRef]);
};

export default useTabIndicator