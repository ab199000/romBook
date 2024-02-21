import React, { useEffect, useRef, useState } from "react";
import styles from "./CatalogOfGenres.module.css"
import imgBook from "../../img/book-open-black.svg"
import { NavLink } from "react-router-dom";

export default function CatalogOfGenres({isOpen,setIsOpen}){
    
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
                        <NavLink to={'/realistic_prose'} onClick={()=>setIsOpen(false)}>
                            Реалистическая проза
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/detective'} onClick={()=>setIsOpen(false)}>
                            Детектив
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/adventures'} onClick={()=>setIsOpen(false)}>
                            Приключения
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/a_love_affair'} onClick={()=>setIsOpen(false)}>
                            Любовный роман
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/a_historical_novel'} onClick={()=>setIsOpen(false)}>
                            Исторический роман
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/fantasy'} onClick={()=>setIsOpen(false)}>
                            Фантастика
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/fairy_tales'} onClick={()=>setIsOpen(false)}>
                            Сказки
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/catalog'} onClick={()=>setIsOpen(false)}>
                            Все книги
                        </NavLink>
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