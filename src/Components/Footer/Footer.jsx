import React from "react";
import styles from "./Footer.module.css"

import logoFooter from "../../img/logoFooter.svg"
import okLogo from "../../img/okLogo.svg"
import youtubeLogo from "../../img/youtubeLogo.svg"
import vkLogo from "../../img/vkLogo.svg"
import telegramLogo from "../../img/telegramLogo.svg"
import { NavLink } from "react-router-dom";

export default function Footer(){
    return (
        <footer>
            <div className={styles.container}>
                <NavLink to={"/"} className="logo">
                    <img src={logoFooter} alt="logo" />
                </NavLink>

                <ul className={styles.listLinks}>
                    <li>
                        <NavLink to={"/catalog"}>В НАШИХ МАГАЗИНАХ</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/our_shop"}>АДРЕСА МАГАЗИНОВ</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>О КОМПАНИИ</NavLink>
                    </li>
                </ul>

                <div className={styles.footerRight}>
                    <div className={styles.feedbackBlock}>
                        <p>ОБРАТНАЯ СВЯЗЬ</p>
                        <div className={styles.mesMail}>
                            <a href="https://e.mail.ru/compose?to=test@mail.ru" className={styles.mailBlock} target="_blank">
                                <span className={styles.mail}>test@mail.ru</span>
                                <div className={styles.btnfeedback}></div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.messengersList}>
                        <ul>
                            <li>
                                <a href="https://ok.ru">
                                    <img src={okLogo} alt="Ok" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/">
                                    <img src={youtubeLogo} alt="YouTube" />
                                </a>
                            </li>
                            <li>
                                <a href="https://vk.com/">
                                    <img src={vkLogo} alt="Vk" />
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me">
                                    <img src={telegramLogo} alt="Telegram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className={styles.rights}>Все права защищены ©️</p>
            
        </footer>
    )
}