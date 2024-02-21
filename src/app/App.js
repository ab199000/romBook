import React from "react";
import AboutUs from "../pages/AboutUs/AboutUs";
import Basket from "../pages/Basket/Basket";
import BookPage from "../pages/BookPage/BookPage";
import { Routes, Route,Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/catalog" element={<CatalogPage nameChapter={"Все книги"} genre={'books'}/>}/>
                <Route path="/catalog/:id" element={<BookPage/>}/>
                <Route path="/cart" element={<Basket/>}/>
                <Route path="/realistic_prose" element={<CatalogPage nameChapter={"Реалистическая проза"} genre={'realistic_prose'}/>}/>
                <Route path="/detective" element={<CatalogPage nameChapter={"Детектив"} genre={'detective'}/>}/>
                <Route path="/adventures" element={<CatalogPage nameChapter={"Приключения"} genre={'adventures'}/>}/>
                <Route path="/a_love_affair" element={<CatalogPage nameChapter={"Любовный роман"} genre={'a_love_affair'}/>}/>
                <Route path="/a_historical_novel" element={<CatalogPage nameChapter={"Исторический роман"} genre={'a_historical_novel'}/>}/>
                <Route path="/fantasy" element={<CatalogPage nameChapter={"Фантастика"} genre={'fantasy'}/>}/>
                <Route path="/fairy_tales" element={<CatalogPage nameChapter={"Сказки"} genre={'fairy_tales'}/>}/>
            </Routes>

            {/* <Header/> */}
            {/* <Slider/> */}
            {/* <AboutUs/> */}
            {/* <BookPage/> */}
            {/* {/* <Basket/> */}
            {/* <OurShops/> */}
        </div>
    );
}

export default App;
