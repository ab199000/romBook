import React, { useEffect } from "react";
import styles from "./BookCard.module.css"

import bookImg from "../../img/alisBook.jpg"
import star from "../../img/star.svg"
import heart from "../../img/heart.svg"
import { Link } from "react-router-dom";


export default function BookCard(item, key){
  
    return (
        <Link to={`/catalog/${item.data.productId}`} key={key}> 
            <div className={styles.card}>
                <img src={item.data.bookImage} alt="imgBook"/>
                <div className={styles.cardInfor}>
                    <p className={styles.nameBook}>{item?.data?.bookTitle}</p>
                    <p className={styles.author}>{item?.data?.author}</p>
                    <div className={styles.shelfDown}>
                        <p className={styles.price}>{item?.data?.price}₽</p>
                        <div className={styles.markBlock}>
                            <p>{item?.data?.rating}</p>
                            <img src={star} alt="star" />
                        </div>
                    </div>
                </div>
                <img className={styles.btnLike} src={heart} alt="#" />
            </div>
        </Link>
    )
}