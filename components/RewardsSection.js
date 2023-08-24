import React from "react";
import { Image } from "next/dist/client/image-component";
import styles from "../styles/RewardStyles.module.css";

const Reward = ({ text, img, isReversed = false, width, height }) => {
  const textArr = text.split("|");
  const containerStyles = isReversed ? styles.containerReversed : styles.container;
  const leftContainerStyles = styles.leftContainer;
  const rightContainerStyles = styles.rightContainer;
  const textStyles = styles.text;

  return (
    <div className={containerStyles}>
      <div className={leftContainerStyles}>
        <div className={textStyles}>
          <strong>{textArr[0]}</strong>
          {textArr.slice(1).map((textPart, index) => (
            <React.Fragment key={index}>{textPart}</React.Fragment>
          ))}
        </div>
      </div>
      <div className={rightContainerStyles}>
        <Image src={img} width={width} height={height} alt="Uni Cards" />
      </div>
    </div>
  );
};

export default Reward;
