import { React, useState, useEffect, useRef } from "react";
import styles from "./Slider.module.css"

import imgForSlider1 from "../../img/imgForSlider1.svg"
import imgForSlider2 from "../../img/imgForSlider2.svg"
import imgForSlider3 from "../../img/imgForSlider3.svg"
import imgForSlider4 from "../../img/slider/Group 15.jpg"

import img1 from "../../img/slider/i(1).webp"
import img3 from "../../img/slider/i(2).webp"
import img2 from "../../img/slider/i.webp"

import arrowLeft from "../../img/arrow-left.svg"
import arrowRight from "../../img/arrow-right.svg"


const massImg = [imgForSlider1,imgForSlider4]

export default function Slider(){

    let autoPlay = true
    let autoPlayTime = 5000
    const [items, setItems] = useState([])
    const [slide,setSlide] = useState(0)
    const [hover,setHover] = useState(false)
    const [touchPosition, setTouchPosition] = useState(null)
    const [intervalSlide, setIntervalSlide] = useState(null)

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;
    
        if (slide + direction < 0) {
          slideNumber = items.length - 1
        } else {
          slideNumber = (slide + direction) % items.length
        }
    
            setSlide(slideNumber)
        }

    // const goToSlide = (number) => {
    //     setSlide(number % items.length);
    // };
    
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        console.log(touchDown);
        setTouchPosition(touchDown);
    }
    
    const handleTouchMove = (e) => {
        if (touchPosition === null) {
            return;
    }
    
    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;
    
        if (direction > 10) {
            changeSlide(1);
        }
    
        if (direction < -10) {
            changeSlide(-1);
        }
    
        setTouchPosition(null);
    }
    
    useEffect(() => {
        setItems(massImg)
        
        if (!autoPlay) return
        if(items.length){
            const interval = setInterval(() => {
                changeSlide(1);
            }, autoPlayTime)
            setIntervalSlide(interval)
            
        }
        
    
        return () => {
            clearInterval(intervalSlide);
        }
    }, [items.length, slide]);

    return (
        <div className={styles.slider} onTouchStart={handleTouchStart} onTouchEnd={handleTouchMove}
        onMouseEnter={()=>{
            clearInterval(intervalSlide)
        }}
        onMouseLeave={()=>{
            setSlide(slide)
            const interval = setInterval(() => {
                changeSlide(1);
                
            }, autoPlayTime)
            setIntervalSlide(interval)

        }}
        >
            <div className={styles.leftImg}>
                <img src={items[slide]} className={styles.slideAnimation}alt="#" />
                <button className={styles.circleL} onClick={()=>{changeSlide(-1)}}>
                    <img src={arrowLeft} alt="#" />
                </button>
                <button className={styles.circleR} onClick={()=>{changeSlide(1)}}>
                    <img src={arrowRight} alt="#" />
                </button>
            </div>
            <div className={styles.rightBlock}>
                <img src={imgForSlider2} className={styles.radius} alt="#" />
                <img  src={imgForSlider3} className={styles.radius} alt="#" />
            </div>
            
        </div>
    )
}