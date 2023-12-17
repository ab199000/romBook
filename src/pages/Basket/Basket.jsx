import React from "react";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import styles from "./Basket.module.css"
import BasketItem from "../../Components/BasketItem/BasketItem.jsx";


export default function Basket(){
    return (
        <main className={styles.basket}>
            <Header/>
                <div className={styles.basketItemList}>
                    <h1 className={styles.basketName}>Корзина</h1>
                    <BasketItem/>
                    <BasketItem/>
                    <BasketItem/>
                    <button className={styles.btnBuy}>Оформить заказ</button>
                </div>
            <Footer/>
        </main>
    )
}