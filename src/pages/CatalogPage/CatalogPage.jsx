import React, { useEffect, useState } from 'react'
import Header from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import BookCard from '../../Components/BookCard/BookCard';

import {allBooks }from "../../content/books" 

import styles from "./CatalogPage.module.css"
import { useLocation } from 'react-router-dom';
import NotFound from '../../Components/NotFound/NotFound';

export default function CatalogPage({nameChapter, genre,searchValue}) {
    const [products, setProducts ] = useState([])
    const location = useLocation()

    const filteredBooks = products.filter((book)=>{
      return book.bookTitle.toLowerCase().includes(searchValue.toLowerCase())
    })

    useEffect(()=>{
        setProducts(allBooks[genre])
    },[location])

  return (
    <main>
      <h2 className={styles.title}>{nameChapter}</h2>
      <section className={styles.booksSection}>
        {filteredBooks.length !== 0 ? filteredBooks.map((item,idx)=>(<BookCard data={item} key={idx}/> )) : null }
      </section>
      {!filteredBooks.length ? <NotFound/> : null }
    </main>
  )
}
