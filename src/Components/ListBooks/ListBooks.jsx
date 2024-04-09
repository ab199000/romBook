import React, { useState } from "react";
import styles from "./ListBooks.module.css"
import { NavLink } from "react-router-dom";
import BookCard from "../BookCard/BookCard";

import arrowLeft from "../../img/arrow-left.svg"
import arrowRight from "../../img/arrow-right.svg"

export default function ListBooks({way,books,nameGenres}){
    const [numPosition, setNumPosition] = useState(1)
    return (
        <section className={styles.listBlok}>
            <div className={styles.top}>
                <NavLink to={`/${way}`} className={styles.nameGenres}>
                    {nameGenres}
                </NavLink>
                <div className={styles.buttonScrol}>
                    {numPosition == 1 ? null:
                    <button className={styles.arrow} onClick={()=>{
                        if (numPosition>1) {
                            setNumPosition(numPosition-1)
                        }
                    }}>
                        <img src={arrowLeft} alt="arrowLeft" />
                    </button>}
                    <button className={styles.arrow} onClick={()=>{
                        if (numPosition<4) {
                            setNumPosition(numPosition+1)
                        }
                    }}>
                        <img src={arrowRight} alt="arrowRight" />
                    </button>
                </div>
            </div>

            <div className={styles.list}>
                {books.length ? books.map((book,index)=>{
                    if(numPosition*4-5 < index && index <= numPosition*4-1) return(<div className={styles.card} key={index}><BookCard data={book} key={index}/></div>)}): null}
            </div>
        </section>
    )
}