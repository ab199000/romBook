import React, { useEffect } from "react";
import styles from "./BookInforCard.module.css"

import star from "../../img/star.svg"

export default function BookInforCard({data}){
    useEffect(()=>{
        console.log(data);
    },[data])
    return (
        <div className={styles.card}>
            <div className={styles.topShelf}>
                <div className={styles.nameBook}>
                    <p className={styles.nameBooks}>{data.bookTitle}</p>
                    <p className={styles.author}>{data.author}</p> 
                </div>
                <div className={styles.price}>
                    <div className={styles.mark}>
                        <p>{data.rating}</p>
                        <img src={star} alt="star"/>
                    </div>
                    <p className={styles.priceRed}>{data.price}₽</p>
                </div>
            </div>
            <div className={styles.specifications}>
                <h3>Характеристики</h3>
                <div className={styles.specificationsList}>
                    <div className={styles.types}>
                        <p>Тип обложки</p>
                        <p>Количество страниц</p>
                        <p>Год издания</p>
                        <p>Серия</p>
                    </div>
                    <div className={styles.specific}>
                        <p>{data.coverType}</p>
                        <p>{data.numberOfPages}</p>
                        <p>{data.coverType}</p>
                        <p>{data.bookSeries}</p>
                    </div>
                </div>
                <div className={styles.idBook}>
                    <p>ID товара</p>
                    <p>{data.productId}</p>
                </div>
                
            </div>
        </div>
    )
}