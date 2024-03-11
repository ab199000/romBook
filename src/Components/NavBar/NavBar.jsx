import React, { useState } from "react";
import styles from "./NavBar.module.css"

import logo from "../../img/logo.svg"
import bookOpen from "../../img/book-open.svg"
import iconMagnifier from "../../img/icon-magnifier.svg"
import page from "../../img/page.svg"
import heart from "../../img/heart.svg"
import CatalogOfGenres from "../CatalogOfGenres/CatalogOfGenres";
import { NavLink } from "react-router-dom";

export default function Header({setSearchValue}){
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState('')
    return (
        <header>
            <div className={styles.container}>
                <NavLink to={"/"} className={styles.logo}>
                    <img src={logo} alt="logo"/>
                </NavLink>

                <button className={styles.dropList} onClick={()=>{setIsOpen(true)}}>
                    <img src={bookOpen} alt="book-open" />
                    Каталог
                </button>
                <CatalogOfGenres isOpen = {isOpen} setIsOpen={setIsOpen}/>
                <div className={styles.searchBlock}>
                    <input type="text" placeholder="Мне нужно..." onChange={(e)=>{
                        if(e.target.value == ''){
                            setSearchValue('')
                        }
                        setInput(e.target.value)}}/>
                    <NavLink to={'/catalog'} className={styles.Magnifier}>
                        <img src={iconMagnifier} alt="magnifier" onClick={()=>{setSearchValue(input)}}/>
                    </NavLink>
                    
                </div>
                <button className={styles.userAccBtn}>
                    <img src={page} alt="page" />
                </button>
                
                <NavLink to={'/cart'} className={styles.favoriteListBtn}>
                    <img src={heart} alt="heart" />
                </NavLink>
            </div>
        </header>
    )
}

