import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/FadeInFromTop.module.css"; // Import your CSS file

function FadeInFromTop({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const animatedElementRef = useRef(null);

  useEffect(() => {
    function isElementInViewport(el) {
      if (!el) {
        return false;
      }
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleScroll() {
      const animatedElement = animatedElementRef.current;
      if (isElementInViewport(animatedElement)) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles["fade-in-from-top"]} ${
        isVisible ? `${styles["fade-in-animation"]}` : ""
      }`}
      ref={animatedElementRef}
    >
      {children}
    </div>
  );
}

export default FadeInFromTop;
