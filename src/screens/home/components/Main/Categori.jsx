import React from 'react';
import styles from './Categori.module.css';
import styles_g from '../../../../components/styles/Global.module.css';
import SSD_img from "./images_cat/ssd.png";
import HDD_img from './images_cat/hdd.png';
import math_img from './images_cat/math.png';
import proc_img from './images_cat/proc.png';
import block_img from './images_cat/block.png';
import comp_img from './images_cat/comp.png';
import conf_img from './images_cat/conf.png';
import oper_img from './images_cat/oper.png';
import ofis_img from './images_cat/ofis.png';
import corp_img from './images_cat/corp.png';
function Categori() {
    return (
        <div className={styles.main}>
            <div className={styles.main_top}>
                <h1>Популярные категории</h1>
            </div>
            <div className={styles.main_bot}>
                <div className={styles.main_bot_flex}>
                    <div className={styles.main_bot_flex_item}>
                        <button>
                            <img src={comp_img} alt="comp" />
                            <span>Игровые компьютеры</span>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button>
                            <img src={SSD_img} alt="SSD" />
                            <span>SSD накопители</span>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button>
                            <img src={proc_img} alt="Proc" />
                            <span>Процессоры</span>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button>
                            <img src={conf_img} alt="" />
                            <span>Конфигуратор ПК</span>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button>
                            <img src={ofis_img} alt="" />
                            <span>Офисные компьютеры</span>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button>
                            <img src={block_img} alt="" />
                            <span>Блоки питания</span>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button>
                            <img src={oper_img} alt="" />
                            <span>Оперативная память</span>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button>
                            <img src={HDD_img} alt="" />
                            <span>Внешние HDD</span>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button>
                            <img src={math_img} alt="" />
                            <span>Материнские платы</span>
                        </button>
                    </div>
                    <div className={styles.main_bot_flex_item}>
                        <button>
                            <img src={corp_img} alt="" />
                            <span>Корпуса</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categori;