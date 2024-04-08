import styles from './Header.module.css'
import styles_g from '../../../../components/styles/Global.module.css'
import CallButton from './CallButton'
import { useNavigate } from 'react-router-dom'
import { FaRegClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { PiScales } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import Logo from "../../../../assets/images/SuRe_Fok.png";
import React, { useState } from 'react';


function Header() {
    const nav = useNavigate()
    const [isFocused, setIsFocused] = useState(true);
    const handleFocus = () => {
        setIsFocused(false);
    };

    const handleBlur = () => {
        setIsFocused(true);
    };
    return (
        <header className={styles.header}>
            <div className={`${styles_g.container} ${styles.top_block}`}>
                <div className={styles.top_block_flex}>
                    <ul>
                        <li>
                            <button onClick={() => nav('/')}>Главная</button>
                        </li>
                        <li>
                            <button onClick={() => nav('/about/')}>О магазине</button>
                        </li>
                        <li>
                            <button onClick={() => nav('/configurator/')}>Конфигуратор ПК</button>
                        </li>
                        <li>
                            <button onClick={() => nav('/delivery/')}>Доставка и оплата</button>
                        </li>
                        <li>
                            <button onClick={() => nav('/warranty/')}>Гарантия</button>
                        </li>
                        <li>
                            <button><CallButton phoneNumber="Контакты" /></button>
                        </li>
                    </ul>
                    <div className={styles.top_block_flex_rigth}>
                        <div className={styles.header_icon_text}>
                            <FaRegClock />
                            <p>Пн-Пт: 10:00 - 20:00</p>
                        </div>
                        <div className={styles.header_icon_text}>
                            <FaPhone />
                            <CallButton phoneNumber="8 (776) 006-19-08" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles_g.container} ${styles.bot_block}`}>
                <div className={styles.bot_block_flex}>
                    <div className={styles.bot_block_flex_main}>
                        <div className={styles.bot_block_flex_main_logo}>
                            <button onClick={() => nav('/')}>
                                <img src={Logo} alt="logo" />
                            </button>
                        </div>
                        {/* <div className={styles.bot_block_flex_main_text}>
                            <IoMenu />
                            <p>Каталог</p>
                        </div> */}
                        {/* <div className={isFocused ? styles.bot_block_flex_main_search : styles.bot_block_flex_main_search_focus}>
                            <input type="text" onFocus={handleFocus} onBlur={handleBlur} className={styles.bot_block_flex_main_search_input} placeholder="Поиск по сайту" />
                            <button className={styles.bot_block_flex_main_search_btn}>
                                <FaSearch />
                            </button>
                        </div> */}
                        <div className={styles.bot_block_flex_main_cart}>
                            {/* <button>
                                <PiScales />
                                Сравнение
                            </button> */}
                            {/* <button>
                                <FaRegHeart />
                                Избранное
                            </button> */}
                            {/* <button onClick={() => nav('/cart/')}>
                                <SlBasket />
                                Корзина
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
