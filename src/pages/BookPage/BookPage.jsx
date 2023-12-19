import React, { useEffect, useState } from "react";
import styles from "./Bookpage.module.css"
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import bookImg from "../../img/nikogde.jpg"
import BookInforCard from "../../Components/BookInforCard/BookInforCard";
import { useParams } from "react-router-dom";
import { getProduct } from "../../service/requests";

export default function BookPage() {
    const { id } = useParams()

    const [ data, setData ] = useState({})

    useEffect(()=>{
        getProduct(id)
        .then((res)=>{
            setData(res.data)
            console.log(res.data);
        })
    },[id])

    return (
        <>
            <Header />
            <main>
                <div className={styles.BookPage}>
                    <div className={styles.bookInfor}>
                        <img className={styles.bookImg} src={data?.bookImage} alt="book" />
                        <BookInforCard data={data} />
                    </div>
                    <div className={styles.description}>
                        <h3>{data?.bookTitle}</h3>
                        <p>{data?.description}</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}