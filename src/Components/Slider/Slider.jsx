import React from "react";
import styles from "./Slider.module.css"

export default function Slider(){
    return (
        <div className={styles.slider}>
            <img className={styles.leftImg} src="./img/imgForSlider1.svg" alt="#" />

            <div className={styles.rightBlock}>
                <img src="./img/imgForSlider2.svg" alt="#" />
                <img  src="./img/imgForSlider3.svg" alt="#" />
            </div>

        </div>
    )
}