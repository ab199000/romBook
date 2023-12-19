import React from "react";
import styles from "./Slider.module.css"

import imgForSlider1 from "../../img/imgForSlider1.svg"
import imgForSlider2 from "../../img/imgForSlider2.svg"
import imgForSlider3 from "../../img/imgForSlider3.svg"

export default function Slider(){
    return (
        <div className={styles.slider}>
            <img className={styles.leftImg} src={imgForSlider1} alt="#" />

            <div className={styles.rightBlock}>
                <img src={imgForSlider2} alt="#" />
                <img  src={imgForSlider3} alt="#" />
            </div>

        </div>
    )
}