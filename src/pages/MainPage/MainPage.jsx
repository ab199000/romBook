import React, { useEffect, useState } from 'react'
import Slider from "../../Components/Slider/Slider";
import Header from "../../Components/Header/NavBar";
import Footer from "../../Components/Footer/Footer";
import CatalogOfGenres from '../../Components/CatalogOfGenres/CatalogOfGenres';
import ListBooks from '../../Components/ListBooks/ListBooks';
import { books } from '../../content/books';

export default function MainPage() {
  const [products, setProducts ] = useState([])

  useEffect(()=>{
    setProducts(books)
  },[])
  return (
    <>
        <Header/>

        <main>
          <Slider/>
          <ListBooks way={'realistic_prose'} books={products} nameGenres={'Реалистическая проза'}/>
          <ListBooks way={'detective'} books={products} nameGenres={'Детектив'}/>
          <ListBooks way={'adventures'} books={products} nameGenres={'Приключения'}/>
          <ListBooks way={'a_love_affair'} books={products} nameGenres={'Любовный роман'}/>
          <ListBooks way={'a_historical_novel'} books={products} nameGenres={'Исторический роман'}/>
          <ListBooks way={'fantasy'} books={products} nameGenres={'Фантастика'}/>
          <ListBooks way={'fairy_tales'} books={products} nameGenres={'Сказки'}/>
        </main>

        <Footer/>
    </>
  )
}
