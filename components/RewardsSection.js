import React from "react";
import { Image } from "next/dist/client/image-component";
import styles from "../styles/RewardStyles.module.css";

export default function Reward(props) {
  const { text, img, isReversed = false, width, height } = props;
  const textArr = text.split("|");
  return (
    <div className={isReversed ? styles.containerReversed : styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.text}>
          <strong>{textArr[0]}</strong>
          {textArr[1]}
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Image src={img} width={width} height={height} alt="Uni Cards" />
      </div>
    </div>
  );
}
