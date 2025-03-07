import { useEffect } from 'react';
import gsap from 'gsap';

const MagicCursor: React.FC = () => {
  useEffect(() => {
    const cursorBall = document.getElementById('ball');
    const hoverElements = document.querySelectorAll<HTMLAnchorElement>('a');
    const hoverElements2 = document.querySelectorAll<HTMLElement>('.feature-project');

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorBall) {
        gsap.to(cursorBall, {
          duration: 1,
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          ease: 'power2.out',
        });
      }
    };

    const handleHoverEnter = () => {
      if (cursorBall) {
        cursorBall.classList.add('hovered');
        gsap.to(cursorBall, {
          duration: 0.3,
          scale: 2,
          opacity: 0,
          ease: (t: number) => t * t * (3 - 2 * t),
        });
      }
    };

    const handleHoverLeave = () => {
      if (cursorBall) {
        cursorBall.classList.remove('hovered');
        gsap.to(cursorBall, {
          duration: 0.3,
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
        });
      }
    };

    const handleProjectEnter = () => {
      if (cursorBall) {
        cursorBall.style.opacity = '0';
        cursorBall.classList.add('hide-mouse');
      }
    };

    const handleProjectLeave = () => {
      if (cursorBall) {
        cursorBall.style.opacity = '1';
        cursorBall.classList.remove('hide-mouse');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    hoverElements.forEach((element) => {
      element.addEventListener('mouseenter', handleHoverEnter);
      element.addEventListener('mouseleave', handleHoverLeave);
    });

    hoverElements2.forEach((element) => {
      element.addEventListener('mouseenter', handleProjectEnter);
      element.addEventListener('mouseleave', handleProjectLeave);
    });

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      hoverElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleHoverEnter);
        element.removeEventListener('mouseleave', handleHoverLeave);
      });
      hoverElements2.forEach((element) => {
        element.removeEventListener('mouseenter', handleProjectEnter);
        element.removeEventListener('mouseleave', handleProjectLeave);
      });
    };
  }, []);

  return (
    <div id="magic-cursor">
      <div id="ball"></div>
    </div>
  );
};

export default MagicCursor;
