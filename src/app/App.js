import React from "react";
// import Header from "../Components/Header/Header";
// import styles from "./App.module.css"
// import Footer from "../Components/Footer/Footer";
// import BookCard from "../Components/BookCard/BookCard";
import Slider from "../Components/Slider/Slider";
// import Map from "../Components/Map/Map";
import OurShops from "../pages/OurShops/OuerShops";
import AboutUs from "../pages/AboutUs/AboutUs";
// import BasketItem from "../Components/BasketItem/BasketItem";
import Basket from "../pages/Basket/Basket";
// import BookInforCard from "../Components/BookIforCard/BookInforCard";
import BookPage from "../pages/BookPage/BookPage";
import Header from "../Components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Slider/>
            {/* <AboutUs/> */}
            {/* <BookPage/> */}
            {/* {/* <Basket/> */}
            {/* <OurShops/> */}
        </div>
    );
}

export default App;
