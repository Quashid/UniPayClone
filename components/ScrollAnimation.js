import React, { useEffect, useState } from "react";
import styles from "../styles/ScrollAnimation.module.css";

const ScrollAnimation = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.8;
      const elementTop = window.scrollY + triggerPoint;

      const elementOffset = document.querySelector("#triggerPoint").offsetTop;

      if (elementTop > elementOffset) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.item} ${isVisible ? styles.active : ""}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
