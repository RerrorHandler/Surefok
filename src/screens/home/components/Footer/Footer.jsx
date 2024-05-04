import styles from './Footer.module.css';
import styles_g from '../../../../components/styles/Global.module.css'

function Footer() {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`${styles_g.container}`}>
                <div className={`${styles.parent}`}>
                    <div className={`${styles.div1}`}>
                        2024-2024 SuRe:Fok - интернет магазин компьютероной техники
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;