import React from "react";
import styles from "./NotFound.module.css"

export default function NotFound(){
    return(
        <div className={styles.errorBlok}>
            <h2>Ничего не найдено</h2>
            <p>Попробуйте изменить запрос</p>
        </div>
    )
}