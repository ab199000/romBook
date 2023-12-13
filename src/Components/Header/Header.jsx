import React from "react";
import styles from "./Header.module.css"

export default function Header(){
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="./img/logo.svg" alt="logo"/>
                </div>

                <button className={styles.dropList}>
                    <img src="./img/book-open.svg" alt="book-open" />
                    Каталог
                </button>

                <div className={styles.searchBlock}>
                    <input type="text" placeholder="Мне нужно..."/>
                    <img src="./img/icon-magnifier.svg" alt="magnifier" />
                </div>
                <button className={styles.userAccBtn}>
                    <img src="./img/page.svg" alt="page" />
                </button>
                
                <button className={styles.favoriteListBtn}>
                    <img src="./img/heart.svg" alt="heart" />
                </button>
            </div>
        </header>
    )
}

