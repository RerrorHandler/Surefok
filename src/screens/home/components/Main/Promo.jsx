import React from 'react';
import styles from './Promo.module.css';
import { useNavigate } from 'react-router-dom'
import styles_g from '../../../../components/styles/Global.module.css'

export default function Promo() {
    const nav = useNavigate()
    return (
        <div className={styles.main}>
            <div className={styles.main_center}>
                <p>Собери свой персональный компьютер</p>
                <div className={styles.main_center_flex}>
                    <button onClick={() => nav('/')}>Готовые сборки</button>
                    <button onClick={() => nav('/configurator')}>Индивидуальная сборка ПК</button>
                </div>
            </div>
        </div>
    );
}

