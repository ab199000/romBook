import React, { useEffect, useRef, useState } from "react";
import styles from "./CatalogOfGenres.module.css"
import imgBook from "../../img/book-open-black.svg"

export default function CatalogOfGenres({isOpen,setIsOpen}){
    // const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)
    useClickOutside(menuRef,()=>{
        if (isOpen) {setTimeout(setIsOpen(false),50)}
    })
    if(isOpen){

        return (
            <div className={styles.catalogNames} ref = {menuRef}>
                <div className={styles.catalog}>
                    <img src={imgBook} alt="book-open" />
                    <p>Каталог</p>
                </div>
                <ul className={styles.list}>
                    <li>
                        <a href="#">Реалистическая проза</a>
                    </li>
                    <li>
                        <a href="#">Детектив</a>
                    </li>
                    <li>
                        <a href="#">Приключения</a>
                    </li>
                    <li>
                        <a href="#">Любовный роман</a>
                    </li>
                    <li>
                        <a href="#">Исторический роман</a>
                    </li>
                    <li>
                        <a href="#">Фантастика</a>
                    </li>
                    <li>
                        <a href="#">Сказки</a>
                    </li>
                </ul>
            </div>
        )
    }
}

function useClickOutside(ref,callback){
    const handleClick = (e)=>{
        if(ref.current && !ref.current.contains(e.target)){
            callback()
        }
    }
    useEffect(()=>{
        document.addEventListener('mousedown', handleClick)
        return ()=>{document.removeEventListener('mousedown', handleClick)}
    })
}