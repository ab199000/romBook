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
                            <img src={star} alt="star"/>
                        </div>
                    </div>
                </div>
                {/* <img className={styles.btnLike} src={heart} alt="#" /> */}
                <svg className={styles.btnLike} width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 7.68487C19.8014 2.69463 12.7855 1.15243 7.52487 5.72199C2.26425 10.2915 1.52363 17.9316 5.65482 23.336C9.08963 27.8294 19.4845 37.3064 22.8915 40.3738C23.2725 40.717 23.4631 40.8886 23.6855 40.9559C23.8794 41.0147 24.0917 41.0147 24.2859 40.9559C24.5082 40.8886 24.6986 40.717 25.0799 40.3738C28.4868 37.3064 38.8816 27.8294 42.3165 23.336C46.4476 17.9316 45.7973 10.2435 40.4463 5.72199C35.0953 1.2005 28.1986 2.69463 24 7.68487Z" stroke="black" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
        </Link>
    )
}