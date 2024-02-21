import React from "react";
import styles from "./ListBooks.module.css"
import { NavLink } from "react-router-dom";
import BookCard from "../BookCard/BookCard";

export default function ListBooks({way,books,nameGenres}){
    return (
        <section className={styles.listBlok}>
            <NavLink to={`/${way}`} className={styles.nameGenres}>
                <h3>{nameGenres}</h3>
            </NavLink>
            <ul className={styles.list}>
                {books.length ? books.map((book,index)=>(<li><BookCard data={book}/></li>)): null}
            </ul>
        </section>
    )
}