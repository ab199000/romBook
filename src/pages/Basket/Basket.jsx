import React from "react";
import styles from "./Basket.module.css"
import BasketItem from "../../Components/BasketItem/BasketItem.jsx";


export default function Basket(){
    return (
        <main className={styles.basket}>
            <div className={styles.basketItemList}>
                <h1 className={styles.basketName}>Корзина</h1>
                <BasketItem/>
                <BasketItem/>
                <BasketItem/>
                <button className={styles.btnBuy}>Оформить заказ</button>
            </div>
        </main>
    )
}