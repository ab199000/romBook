import React from "react";
import styles from "./BookCard.module.css"


export default function BookCard(){
    return (
        <div className={styles.card}>
            <img src="./img/alisBook.jpg" alt="imgBook"/>
            <div className={styles.cardInfor}>
                <p className={styles.nameBook}>Алиса в стране чудес</p>
                <p className={styles.author}>Льюис Кэрролл</p>
                <div className={styles.shelfDown}>
                    <p className={styles.price}>432 ₽</p>
                    <div className={styles.markBlock}>
                        <p>4.2</p>
                        <img src="./img/star.svg" alt="star" />
                    </div>
                </div>
            </div>
            <img className={styles.btnLike} src="./img/heart.svg" alt="#" />
        </div>
    )
}