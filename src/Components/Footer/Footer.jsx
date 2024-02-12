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
                        <a href="#">В НАШИХ МАГАЗИНАХ</a>
                    </li>
                    <li>
                        <a href="#">АДРЕСА МАГАЗИНОВ</a>
                    </li>
                    <li>
                        <a href="#">НАШИ ПАРТНЁРЫ</a>
                    </li>
                    <li>
                        <a href="#">О КОМПАНИИ</a>
                    </li>
                </ul>

                <div className={styles.footerRight}>
                    <div className={styles.feedbackBlock}>
                        <p>ОБРАТНАЯ СВЯЗЬ</p>
                        <div className={styles.mesMail}>
                            <input type="mail" placeholder="test@mail.ru"/>
                            <div className={styles.btnfeedback}></div>
                        </div>
                    </div>
                    <div className={styles.messengersList}>
                        <ul>
                            <li>
                                <a href="#">
                                    <img src={okLogo} alt="Ok" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={youtubeLogo} alt="YouTube" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={vkLogo} alt="Vk" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
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