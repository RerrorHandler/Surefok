import React from 'react';
import styles from '../delivery/Delivery.module.css'
import styles_g from '../../components/styles/Global.module.css'
import Header from '../home/components/Header/Header'

const Delivery = () => {
  return (
    <div>
      <Header />
      <section className={`${styles_g.container}`}>
        <h2 className='text-3xl'>Доставка</h2>
        <p>Мы предлагаем удобную доставку в любую точку города.</p>
        <p className='mt-4 text-2xl text-blue-600 rounded-xl bg-white p-4'>Ежедневно с 10:00 до 22:00</p>
        <table className={`${styles.tabl}`}>
        <thead>
          <tr>
            <td>Район доставки</td>
            <td>Стоимость доставки</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>По Алматы</td>
            <td>3000 ТГ</td>
          </tr>
          <tr>
            <td>Доставка за пределы Алматы</td>
            <td>зависит от расстояния до пункта назначения*</td>
          </tr>
          <tr>
            <td>Самовывоз товара</td>
            <td>бесплатно</td>
          </tr>
        </tbody>
      </table>
      </section>
      <section className={`${styles_g.container}`}>
        <h2 className='text-3xl mt-4'>Оплата</h2>
        <p>Выберите удобный способ оплаты:</p>
        <ul>
          <li>Оплата картой</li>
          <li>Наличными при получении</li>
          <li>Электронные платежи</li>
        </ul>
      </section>
    </div>
  );
};

export default Delivery;

