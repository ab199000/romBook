import React from "react";
import styles from "./BasketItem.module.css"

export default function BasketItem(){
    return (
        <div className={styles.item}>
            <img className={styles.bookimg} src="./img/alisBook.jpg" alt="#" />
            <div className={styles.info}>
                <p className={styles.nameBook}>Никогде</p>
                <p className={styles.author}>Нил Гейман</p>
            </div>

            <div className={styles.score}>
                <button className={styles.btnminus}>
                    <img src="./img/minus.svg" alt="minus" />
                </button>
                <p>1</p>
                <button className={styles.btnplus}>
                    <img src="./img/plus.svg" alt="plus" />
                </button>
            </div>
            <p className={styles.priceItem}>432₽</p>
            <img className={styles.cross} src="./img/cross.svg" alt="cross" />
        </div>
    )
}