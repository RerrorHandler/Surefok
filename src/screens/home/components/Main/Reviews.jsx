import React from 'react';
import styles from './Reviews.module.css';

function Reviews() {
    return (
        <div className={styles.main}>
            <div className={styles.main_top}>
                <h1>Новости и обзоры</h1>
                <button>Смотреть все</button>
            </div>
            <div className={styles.main_bot}>
                <div className={styles.main_bot_flex}>
                    <div className={styles.main_bot_flex_item}>
                        <button className={styles.main_bot_flex_item_but}>
                            <img src="" alt="" />
                            <div className={styles.main_bot_flex_item_but_txts}>
                                <p>1 января 2024</p>
                                <h1>Скидка 3% по промокоду</h1>
                                <span>Для вас доступна скидка 3% на все товары в нашем интернет-магазине с доставкой!</span>
                            </div>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button className={styles.main_bot_flex_item_but}>
                            <img src="" alt="" />
                            <div className={styles.main_bot_flex_item_but_txts}>
                                <p>4 марта 2019</p>
                                <h1>Поймай удачу за хвост!</h1>
                                <span>С 4 марта по 28 апреля 2019 г. при покупке материнской платы или видеокарты MSI ты получаешь крутые подарки.</span>
                            </div>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button className={styles.main_bot_flex_item_but}>
                            <img src="" alt="" />
                            <div className={styles.main_bot_flex_item_but_txts}>
                                <p>3 ноября 2016</p>
                                <h1>MSI Играй без границ!</h1>
                                <span>С 21 мая по 30 июня 2018 года, Купи видеокарту MSI, зарегистрируйся и получи крутой бонус на свой кошелек Steam прямо сейчас!</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
