import React from "react";

import styles from "./OuerShops.module.css"
import Map from "../../Components/Map/Map.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

import logo from "../../img/logo.svg"

export default function OurShops(){
    return (
        <div className={styles.page}>
            <Header/>
            <h1>Наши магазины</h1>
            <Map/>
            <div className={styles.info}>
                <div className={styles.address}>
                    <p>Адрес:</p>
                    <p>г. Калуга улица Кирова, 43</p>
                </div>
                <div className={styles.cardTime}>
                    <img src={logo} alt="logo" />
                    <div className={styles.cardText}>
                        <p className={styles.statusName}>Открыто</p>
                        <p className={styles.time}>с 9:00 до 20:00</p>
                        <p>Ежедневно</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}