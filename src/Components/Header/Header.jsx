import React, { useState } from "react";
import styles from "./Header.module.css"

import logo from "../../img/logo.svg"
import bookOpen from "../../img/book-open.svg"
import iconMagnifier from "../../img/icon-magnifier.svg"
import page from "../../img/page.svg"
import heart from "../../img/heart.svg"
import CatalogOfGenres from "../CatalogOfGenres/CatalogOfGenres";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo"/>
                </div>

                <button className={styles.dropList} onClick={()=>{setIsOpen(true)}}>
                    <img src={bookOpen} alt="book-open" />
                    Каталог
                </button>
                <CatalogOfGenres isOpen = {isOpen} setIsOpen={setIsOpen}/>
                <div className={styles.searchBlock}>
                    <input type="text" placeholder="Мне нужно..."/>
                    <img src={iconMagnifier} alt="magnifier" />
                </div>
                <button className={styles.userAccBtn}>
                    <img src={page} alt="page" />
                </button>
                
                <button className={styles.favoriteListBtn}>
                    <img src={heart} alt="heart" />
                </button>
            </div>
        </header>
    )
}

