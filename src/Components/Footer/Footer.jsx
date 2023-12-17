import React from "react";
import styles from "./Footer.module.css"

export default function Footer(){
    return (
        <footer>
            <div className={styles.container}>
                <div className="logo">
                    <img src="./img/logoFooter.svg" alt="logo" />
                </div>

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
                                    <img src="./img/okLogo.svg" alt="Ok" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="./img/youtubeLogo.svg" alt="YouTube" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="./img/vkLogo.svg" alt="Vk" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="./img/telegramLogo.svg" alt="Telegram" />
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