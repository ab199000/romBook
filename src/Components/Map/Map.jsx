import React from "react";
import style from "./Map.module.css"

export default function Map(){
    return (
        <div className={style.map}>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4d2da51feab905f549e6644616ce57f57ba92c812904c72e010ea8662baeaaa5&amp;source=constructor" width="1200" height="634" frameborder="0"></iframe>
        </div>
    )
}