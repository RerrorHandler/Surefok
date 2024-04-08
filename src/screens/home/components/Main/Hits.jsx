import React from 'react';
import styles from './Hits.module.css';
import styles_g from '../../../../components/styles/Global.module.css'
import Corp_1 from "./images_prod/Corp_1.jpeg";
export default function Hits() {
    return (
        <div className={styles.main}>
            <div className={styles.main_top}>
                <h1>Хиты продаж</h1>
                <button>Смотреть все</button>
            </div>
            <div className={styles.main_bot}>
                <div className={styles.main_bot_flex}>
                    <div className={styles.main_bot_flex_item}>
                        <button className={styles.main_bot_flex_item_but}>
                            <img src={Corp_1} alt="comp" />
                            <span>Компьютер Riwer HM 3101833</span>
                            <div >
                                <p>45 640 ₸</p>
                                <button>Купить</button>
                            </div>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button className={styles.main_bot_flex_item_but}>
                            <img src={Corp_1} alt="comp" />
                            <span>Компьютер Riwer Style 3162484</span>
                            <div>
                                <p>63 590 ₸</p>
                                <button>Купить</button>
                            </div>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button className={styles.main_bot_flex_item_but}>
                            <img src={Corp_1} alt="comp" />
                            <span>Компьютер Riwer Style 3163558</span>
                            <div>
                                <p>271 410 ₸</p>
                                <button>Купить</button>
                            </div>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button className={styles.main_bot_flex_item_but}>
                            <img src={Corp_1} alt="comp" />
                            <span>Компьютер Riwer Style 3166162</span>
                            <div>
                                <p>157 490 ₸</p>
                                <button >Купить</button>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

