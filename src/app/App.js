import React from "react";
import AboutUs from "../pages/AboutUs/AboutUs";
import Basket from "../pages/Basket/Basket";
import BookPage from "../pages/BookPage/BookPage";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/catalog" element={<CatalogPage/>}/>
                <Route path="/catalog/:id" element={<BookPage/>}/>
                <Route path="/cart" element={<Basket/>}/>
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
