import React, { useEffect, useState } from 'react'
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BookCard from '../../Components/BookCard/BookCard';
import {books }from "../../content/books" 
import styles from "./CatalogPage.module.css"

export default function CatalogPage() {
    const [products, setProducts ] = useState([])

    useEffect(()=>{
      setProducts(books)
    },[])

  return (
    <>
        <Header/>

        <main>

          <section className={styles.booksSection}>

            {products.length !== 0 ? products.map((item,idx)=>(<BookCard data={item}/> )) : null }
            
          </section>
        </main>

        <Footer/>
    </>
  )
}
