import styles from './Footer.module.css';
import styles_g from '../../../../components/styles/Global.module.css'

function Footer() {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`${styles_g.container}`}>
                <div className={`${styles.parent}`}>
                    <div className={`${styles.div1}`}>
                        1
                    </div>
                    <div className={`${styles.div2}`}>
                        2
                    </div>
                    <div className={`${styles.div3}`}>
                        3
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;