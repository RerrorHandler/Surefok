import React from 'react';
import styles from './Hits.module.css';
import styles_g from '../../../../components/styles/Global.module.css'
import Corp_5 from "./images_prod/Corp_5.png";
import Corp_6 from "./images_prod/Corp_6.png";
import Corp_7 from "./images_prod/Corp_7.png";
import Corp_8 from "./images_prod/Corp_8.png";
import MessendComp from "./Messend"
export default function Hits() {
    const HandleSend = (txt) => {
        MessendComp(txt)
    }
    return (
        <div className={styles.main}>
            <div className={styles.main_top}>
                <h1>Хиты продаж</h1>
                {/* <button>Смотреть все</button> */}
            </div>
            <div className={styles.main_bot}>
                <div className={styles.main_bot_flex}>
                    <div className={styles.main_bot_flex_item}>
                        <button className={styles.main_bot_flex_item_but}>
                            <img src={Corp_5} alt="comp" />
                            <span>Компьютер Riwer HM 2134323</span>
                            <div >
                                <p>45 640 ₸</p>
                                <button onClick={()=> {HandleSend('Компьютер Riwer HM 2134323')}}>Купить</button>
                            </div>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button className={styles.main_bot_flex_item_but}>
                            <img src={Corp_6} alt="comp" />
                            <span>Компьютер Riwer Style 3872198</span>
                            <div>
                                <p>63 590 ₸</p>
                                <button onClick={()=> {HandleSend('Компьютер Riwer HM 3872198')}}>Купить</button>
                            </div>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button className={styles.main_bot_flex_item_but}>
                            <img src={Corp_7} alt="comp" />
                            <span>Компьютер Riwer Style 3829173</span>
                            <div>
                                <p>271 410 ₸</p>
                                <button onClick={()=> {HandleSend('Компьютер Riwer HM 3829173')}}>Купить</button>
                            </div>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button className={styles.main_bot_flex_item_but}>
                            <img src={Corp_8} alt="comp" />
                            <span>Компьютер Riwer Style 3827139</span>
                            <div>
                                <p>157 490 ₸</p>
                                <button onClick={()=> {HandleSend('Компьютер Riwer HM 3827139')}}>Купить</button>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

