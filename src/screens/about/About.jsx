import React from 'react';
import styles from './About.module.css'
import styles_g from '../../components/styles/Global.module.css'
import Header from '../home/components/Header/Header'
import AboutImage from '../../assets/images/aboutus.jpg'

const About = () => {
  return (
    <div>
      <Header />
      <main className={`${styles_g.container}`}>
        <div className={`${styles.about}`}>
          <img src={AboutImage} />
          <div className={`${styles.abouttext}`}>
            В жизни человека есть всего три вещи, избежать которых невозможно, - это День рождения, налоги и желание иметь отличный компьютер! И ведь, правда! Поработав недельку-другую после очередного апгрейда своего «железного коня», мы вновь начинаем мечтать о заветных гигабайтах оперативной памяти, 8-ядерном процессоре или более мощной видеокарте. А еще лучше – о новом компьютере или ноутбуке, таком, чтобы «летал» и можно было работать в любых программах, играть в красочные 3D-игры и записывать на винчестер сколько угодно фильмов в высоком качестве HD.
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

