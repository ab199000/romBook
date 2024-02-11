import React, { useEffect, useState } from 'react'
import Slider from "../../Components/Slider/Slider";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BookCard from '../../Components/BookCard/BookCard';

import styles from "./CatalogPage.module.css"
import { getProducts } from '../../service/requests';

export default function CatalogPage() {
    const [products, setProducts ] = useState([])

    useEffect(()=>{
        getProducts()
        .then((res)=>{
            console.log(res.data)
            setProducts(res.data)
        })
    },[])

  return (
    <>
        <Header/>

        <main>
          {/* <Slider/> */}

          <section className={styles.booksSection}>

            {products.length !== 0 ? products.map((item,idx)=>(<BookCard data={item}/> )) : <> </> }
            
          </section>
        </main>

        <Footer/>
    </>
  )
}
