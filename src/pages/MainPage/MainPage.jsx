import React from 'react'
import Slider from "../../Components/Slider/Slider";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CatalogOfGenres from '../../Components/CatalogOfGenres/CatalogOfGenres';

export default function MainPage() {
  return (
    <>
        <Header/>

        <main>
          <Slider/>
        </main>

        <Footer/>
    </>
  )
}
