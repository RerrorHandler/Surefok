import React from 'react';
import styles from './Products.module.css';
import styles_g from '../../../../components/styles/Global.module.css';
import Corp_1 from "./images_prod/Corp_1.jpeg";
import Corp_2 from "./images_prod/Corp_2.jpeg";
import Corp_3 from "./images_prod/Corp_3.jpeg";
import Corp_4 from "./images_prod/Corp_4.jpeg";
import MessendComp from "./Messend"

export default function Products() {
    const HandleSend = (txt) => {
        MessendComp(txt)
    }
    return (
        <div className={styles.main}>
            <div className={styles.main_top}>
                <h1>Новинки</h1>
                {/* <button>Смотреть все</button> */}
            </div>
            <div className={styles.main_bot}>
                <div className={styles.main_bot_flex}>
                    <div className={styles.main_bot_flex_item}>
                        <button className={styles.main_bot_flex_item_but}>
                            <img src={Corp_1} alt="comp" />
                            <span>Компьютер Riwer HM 3101833</span>
                            <div >
                                <p>92 580 ₸</p>
                                <button onClick={()=> {HandleSend('Компьютер Riwer HM 3101833')}}>Купить</button>
                            </div>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button className={styles.main_bot_flex_item_but}>
                            <img src={Corp_2} alt="comp" />
                            <span>Компьютер Riwer Style 3162484</span>
                            <div>
                                <p>238 940 ₸</p>
                                <button onClick={()=> {HandleSend('Компьютер Riwer Style 3162484')}}>Купить</button>
                            </div>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button className={styles.main_bot_flex_item_but}>
                            <img src={Corp_3} alt="comp" />
                            <span>Компьютер Riwer Style 3163558</span>
                            <div>
                                <p>220 860 ₸</p>
                                <button onClick={()=> {HandleSend('Компьютер Riwer Style 3163558')}}>Купить</button>
                            </div>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button className={styles.main_bot_flex_item_but}>
                            <img src={Corp_4} alt="comp" />
                            <span>Компьютер Riwer Style 3166162</span>
                            <div>
                                <p>208 180 ₸</p>
                                <button onClick={()=> {HandleSend('Компьютер Riwer Style 3166162')}}>Купить</button>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}