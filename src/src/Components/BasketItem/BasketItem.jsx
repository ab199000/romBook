import React from "react";
import styles from "./BasketItem.module.css"

import bookImg from "../../img/alisBook.jpg"
import minus from "../../img/minus.svg"
import plus from "../../img/plus.svg"
import cross from "../../img/cross.svg"

export default function BasketItem(){
    return (
        <div className={styles.item}>
            <img className={styles.bookimg} src={bookImg} alt="#" />
            <div className={styles.info}>
                <p className={styles.nameBook}>Никогде</p>
                <p className={styles.author}>Нил Гейман</p>
            </div>

            <div className={styles.score}>
                <button className={styles.btnminus}>
                    <img src={minus} alt="minus" />
                </button>
                <p>1</p>
                <button className={styles.btnplus}>
                    <img src={plus} alt="plus" />
                </button>
            </div>
            <p className={styles.priceItem}>432₽</p>
            <img className={styles.cross} src={cross} alt="cross" />
        </div>
    )
}