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
                    {/* ДОДЕЛАТЬ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                </div>
                <div className={styles.price}>
                    <div className={styles.mark}>
                        <p>4.2</p>
                        <img src={star} alt="star" />
                    </div>
                    <p className={styles.priceRed}>432₽</p>
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
                        <p>Твёрдая</p>
                        <p>464</p>
                        <p>2017</p>
                        <p>Гейман с иллюстрациями<br/> Криса Риддула</p>
                    </div>
                </div>
                <div className={styles.idBook}>
                    <p>ID товара</p>
                    <p>000001</p>
                </div>
                
            </div>
        </div>
    )
}