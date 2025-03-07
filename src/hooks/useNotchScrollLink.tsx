import { useEffect } from "react";

const useNotchScrollLink = (menuSelector: string, linkSelector: string) => {
    useEffect(() => {
        const onScroll = () => {
            const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

            document.querySelectorAll(`${menuSelector} ${linkSelector}`).forEach((currLink) => {
                const targetId = currLink.getAttribute("href") || "";
                const refElement = document.querySelector(targetId) as HTMLElement;

                if (refElement) {
                    if (
                        refElement.offsetTop <= scrollPos &&
                        refElement.offsetTop + refElement.offsetHeight > scrollPos
                    ) {
                        document.querySelectorAll(`${menuSelector} ${linkSelector}`).forEach((link) => {
                            link.classList.remove("active");
                        });
                        currLink.classList.add("active");
                    } else {
                        currLink.classList.remove("active");
                    }
                }
            });
        };

        const smoothScroll = (e: Event) => {
            e.preventDefault();
            const anchor = e.target as HTMLAnchorElement;
            const targetId = anchor.getAttribute("href") || "";
            const targetElement = document.querySelector(targetId) as HTMLElement;

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;

                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                });

                setTimeout(() => {
                    window.location.hash = targetId;
                }, 500);
            }
        };

        const anchors = document.querySelectorAll(`${menuSelector} ${linkSelector}`);
        anchors.forEach((anchor) => {
            anchor.addEventListener("click", smoothScroll);
        });

        document.addEventListener("scroll", onScroll);

        return () => {
            document.removeEventListener("scroll", onScroll);
            anchors.forEach((anchor) => {
                anchor.removeEventListener("click", smoothScroll);
            });
        };
    }, [menuSelector, linkSelector]);
};

export default useNotchScrollLink;