import React from "react";
import { Image } from "next/dist/client/image-component";

import styles from "../styles/Advantages.module.css";

export default function Advantages(props) {
  const { img, text, width, height } = props;
  const textArr = text.split("|");

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.textContainer}>
          {textArr[0]} {"\n"}
          <span>{textArr[1]}</span>
        </div>
        <div className={styles.decscription}>{textArr[2]}</div>
      </div>
      <div className={styles.rightContainer}>
        <Image src={img} width={width} height={height} alt="Uni Cards" />
      </div>
    </div>
  );
}
