import React from 'react';
import styles from './Promo.module.css';
import styles_g from '../../../../components/styles/Global.module.css'

export default function Promo() {
    return (
        <div className={styles.main}>
            <div className={styles.main_center}>
                <p>Собери свой персональный компьютер</p>
                <div className={styles.main_center_flex}>
                    <button>Готовые сборки</button>
                    <button>Индивидуальная сборка ПК</button>
                </div>
            </div>
        </div>
    );
}

