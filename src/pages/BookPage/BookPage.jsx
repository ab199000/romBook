import React, { useEffect, useState } from "react";
import styles from "./Bookpage.module.css"
import Header from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

import BookInforCard from "../../Components/BookInforCard/BookInforCard";
import { useParams } from "react-router-dom";
import {books }from "../../content/books"

export default function BookPage() {
    const { id } = useParams()

    const [ data, setData ] = useState({})

    useEffect(()=>{
        setData(books[id])
    },[id])

    return (
        <main>
            <div className={styles.BookPage}>
                <div className={styles.bookInfor}>
                    <img className={styles.bookImg} src={data?.bookImage} alt="book" />
                    <div>
                        <BookInforCard data={data} />
                        <div className={styles.btnsBlok}>
                            <button className={styles.btnBuy}>Купить</button>
                            <button className={styles.btnCart}>В корзину</button>
                        </div>
                    </div>
                </div>
                <div className={styles.description}>
                    <h3 className={styles.h3}>Описание</h3>
                    <p>{data?.description}</p>
                </div>
            </div>
        </main>
    )
}