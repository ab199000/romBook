import React, { useEffect, useState } from 'react'
import Header from "../../Components/Header/NavBar";
import Footer from "../../Components/Footer/Footer";
import BookCard from '../../Components/BookCard/BookCard';
import {allBooks }from "../../content/books" 

import styles from "./CatalogPage.module.css"
import { useLocation } from 'react-router-dom';

export default function CatalogPage({nameChapter, genre}) {
    const [products, setProducts ] = useState([])
    const location = useLocation()

    useEffect(()=>{
        setProducts(allBooks[genre])
    },[location])

  return (
    <>
        <Header/>

        <main>
          <h2>{nameChapter}</h2>

          <section className={styles.booksSection}>

            {products.length !== 0 ? products.map((item,idx)=>(<BookCard data={item} key={idx}/> )) : null }
            
          </section>
        </main>

        <Footer/>
    </>
  )
}
