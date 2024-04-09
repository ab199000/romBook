import React, { useState, useEffect } from "react";
import AboutUs from "../pages/AboutUs/AboutUs";
import Basket from "../pages/Basket/Basket";
import BookPage from "../pages/BookPage/BookPage";
import { Routes, Route,Navigate, useLocation } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import OurShops from "../pages/OurShops/OuerShops";
import NavBar from "../Components/NavBar/NavBar"
import Footer from "../Components/Footer/Footer"


function App() {

    const [searchValue, setSearchValue] = useState('')
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    return (
        <div className="App">
            <NavBar setSearchValue={setSearchValue}/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/catalog" element={<CatalogPage nameChapter={"Все книги"} genre={'books'} searchValue={searchValue}/>}/>
                <Route path="/catalog/:id" element={<BookPage/>}/>
                <Route path="/cart" element={<Basket/>}/>
                <Route path="/our_shop" element={<OurShops/>}/>
                <Route path="/deferred" element={<CatalogPage nameChapter={"Список отложенных товаров"} genre={'deferred'} searchValue={searchValue}/>}/>
                <Route path="/realistic_prose" element={<CatalogPage nameChapter={"Реалистическая проза"} genre={'realistic_prose'} searchValue={searchValue}/>}/>
                <Route path="/detective" element={<CatalogPage nameChapter={"Детектив"} genre={'detective'} searchValue={searchValue}/>}/>
                <Route path="/adventures" element={<CatalogPage nameChapter={"Приключения"} genre={'adventures'} searchValue={searchValue}/>}/>
                <Route path="/a_love_affair" element={<CatalogPage nameChapter={"Любовный роман"} genre={'a_love_affair'} searchValue={searchValue}/>}/>
                <Route path="/a_historical_novel" element={<CatalogPage nameChapter={"Исторический роман"} genre={'a_historical_novel'} searchValue={searchValue}/>}/>
                <Route path="/fantasy" element={<CatalogPage nameChapter={"Фантастика"} genre={'fantasy'} searchValue={searchValue}/>} />
                <Route path="/fairy_tales" element={<CatalogPage nameChapter={"Сказки"} genre={'fairy_tales'} searchValue={searchValue}/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
