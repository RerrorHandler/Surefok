import React from 'react';
import styles from './Main.module.css';
import styles_g from '../../../../components/styles/Global.module.css'
import SwiperSlider from './Swiper'
import Categori from './Categori'
import Products from './Products'
import Promo from './Promo'
import Hits from './Hits'
import Reviews from './Reviews'

function Main() {
  return (
    <div className={styles.main}>
      <header>
        <div className={`${styles_g.container} ${styles.swiper_block}`}>
          <SwiperSlider />
        </div>
      </header>
      <main>
        <div className={`${styles_g.container} ${styles.wrap_blocks}`}>
          {/* <Categori /> */}
          <Products />
          <Promo />
          <Hits />
          {/* <Reviews /> */}
        </div>
      </main>
    </div>
  );
}

export default Main;
