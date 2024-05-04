import React from 'react';
import styles from './Configurator.module.css'
import styles_g from '../../components/styles/Global.module.css'
import Header from '../home/components/Header/Header'
import Footer from '../home/components/Footer/Footer'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Video_cards = [
    {
        id: 1,
        Name: 'Видеокарта MSI RTX 4080 Super Gaming X Slim, 16 GB, GeForce RTX 4080 Super',
        Chipset_Model: 'GeForce RTX 4080 Super',
        Playback_frequency_in_OC_mode: '2640 MHz',
        Gaming_Mode_Video_Processor_Frequency: '2610 MHz',
        Video_memory_frequency_MHz: '23000',
        Video_Recording_Type: 'GDDR',
        Video_memory_capacity: '16 GB',
        Video_memory_bus_bit_rate: '256 bits',
        Number_of_universal_processors: '10240',
        Connectors: 'HDMI x2, DisplayPort x 3',
        Img_url: 'https://cdn.discordapp.com/attachments/1161706409252098141/1211990169125912646/177392_RTX-4080-Super-Gaming-X-Slim_01_1.png?ex=65f034ce&is=65ddbfce&hm=f08b5289e5e5e9121f1606c057c5391c15622ed4c651581ab12718e569a24eba&',
        Price: 649990
    },
    {
        id: 2,
        Name: 'Видеокарта MSI RTX 4080 Super Gaming Slim, 16 GB, GeForce RTX 4080 Super',
        Chipset_Model: 'GeForce RTX 4080 Super',
        Playback_frequency_in_OC_mode: '2565 MHz',
        Gaming_Mode_Video_Processor_Frequency: '2550 MHz',
        Video_memory_frequency_MHz: '23000',
        Video_Recording_Type: 'GDDR6X',
        Video_memory_capacity: '16 GB',
        Video_memory_bus_bit_rate: '256 bits',
        Number_of_universal_processors: '10240',
        Connectors: 'HDMI x2, DisplayPort x 2',
        Img_url: 'https://cdn.discordapp.com/attachments/1161706409252098141/1211991065767313529/177390_RTX-4080-Super-Gaming-Slim_01_1.png?ex=65f035a3&is=65ddc0a3&hm=4c24360c518e411c024611dc99808be96cae11a6efc05f463cacb998a5f22b4f&',
        Price: 649990
    },
    {
        id: 3,
        Name: 'Видеокарта MSI RTX 4080 Super Gaming X Slim White, 16 GB, GeForce RTX 4080 Super',
        Chipset_Model: 'GeForce RTX 4080 Super',
        Playback_frequency_in_OC_mode: '2625 MHz',
        Gaming_Mode_Video_Processor_Frequency: '2610  MHz',
        Video_memory_frequency_MHz: '23000',
        Video_Recording_Type: 'GDDR6X',
        Video_memory_capacity: '16 GB',
        Video_memory_bus_bit_rate: '256 bits',
        Number_of_universal_processors: '10240',
        Connectors: 'HDMI x2, DisplayPort x 2',
        Img_url: 'https://cdn.discordapp.com/attachments/1161706409252098141/1211991524280115200/177391RTX-4080-Super-Gaming-X-Slim-White_01_1.png?ex=65f03611&is=65ddc111&hm=e0b562014b47102aec44ce3ce7c246186bb17b2c8ff34ec59997f610051a36d6&',
        Price: 649990
    }
]
const Processors = [
    {
        id: 1,
        Name: 'Процессор Intel Core i5 14400F, LGA1700, OEM',
        Processor_Type: 'Core i5',
        Socket: 'LGA 1700',
        Total_number_of_cores: '10',
        Number_of_threads: '16',
        Clock_frequency: '2.5 GHz',
        Microarchitecture: 'Raptor Lake',
        L3_cache_size: '20 MB',
        Integrated_graphics_system: 'Нет',
        Process_technology: '10 nm',
        TDP: '65W',
        Img_url: 'https://cdn.discordapp.com/attachments/1161706409252098141/1211994245024456745/core_i5.png?ex=65f03899&is=65ddc399&hm=cb42fa30f5279931b81d557233d5a46095caf456859be61450324b60f990bc29&',
        Price: 122990
    },
    {
        id: 2,
        Name: 'Процессор Intel Core i5 14500, LGA1700, OEM',
        Processor_Type: 'Core i5',
        Socket: 'LGA 1700',
        Total_number_of_cores: '14',
        Number_of_threads: '20',
        Clock_frequency: '2.6 GHz',
        Microarchitecture: 'Raptor Lake',
        L3_cache_size: '24 MB',
        Integrated_graphics_system: 'Intel UHD Graphics 770',
        Process_technology: '10 nm',
        TDP: '65W',
        Img_url: 'https://cdn.discordapp.com/attachments/1161706409252098141/1211994405603516456/core_i5.png?ex=65f038c0&is=65ddc3c0&hm=079aeac326e1004520efcafc2d3b85701d24c4cb70685e730b221d4f6b9325ef&',
        Price: 149990
    },
]

// const VideoItems = Video_cards.map((Video_card) =>
//     <li className='p-4 flex flex-row space-x-12 w-11/12 mt-8 rounded-xl border-2 border-zinc-300 shadow-lg'>
//         <img src="https://www.ironbook.ru/upload/resize_cache/iblock/877/877de3a302f6eb2ddb43abb5bc188c99/120_120_1/palit_gt_730.jpg" className=' w-32 h-32' />
//         <div className=''>
//             <h1 className='text-2xl'>Название {Video_card.Name}</h1>
//             <p className='text-xl'>Обьем видео памяти: <span className='font-bold'>{Video_card.Video_memory_capacity}</span></p>
//             <p className='text-xl'>Цена: <span className='font-bold'>{Video_card.Price}</span></p>
//         </div>
//         <button className='border-2 mt-20 text-lg p-2 rounded-2xl hover:bg-gray-200' onClick={e => addComp([Video_card.id, Video_card.Name, Video_card.Price])}>Добавить</button>
//     </li>
// );

// const ProcessorsItems = Processors.map((Processor) =>
//     <li className='p-4 flex flex-row space-x-12 mt-8 w-11/12 rounded-xl border-2 border-zinc-300 shadow-lg'>
//         <img src="https://ironbook-bucket.storage.yandexcloud.net/iblock/b4c/b4c3850ca5357e3cb5f9e7cb17f75a81/intel_celeron.jpg" className=' w-32 h-32' />
//         <div className=''>
//             <h1 className='text-2xl'>Название {Processor.Name}</h1>
//             <p className='text-xl'>Обьем видео памяти: <span className='font-bold'>{Processor.Number_of_threads}</span></p>
//             <p className='text-xl'>TDP: <span className='font-bold'>{Processor.TDP}</span></p>
//             <p className='text-xl'>Тактовая частота: <span className='font-bold'>{Processor.Clock_frequency}</span></p>
//         </div>
//         <button className='border-2 mt-20 text-lg p-2 rounded-2xl hover:bg-gray-200'>Добавить</button>
//     </li>
// );

const Configurator = () => {
    const navigate = useNavigate();
    let arr = []
    const [data, setData] = useState(arr)
    const [price, setPrice] = useState(0)
    const addComp = (newObj) => {
        setData(prevArray => [...prevArray, newObj]);
    }
    useEffect(() => {
        const newPrices = data.map(item => item.Price);
        const total = newPrices.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        setPrice(total)
    }, [data]);
    const handleKorz = () => {
        const myObject = data;
        navigate('/Cart/', { state: {myObject,price} });
    };
    const handleClear = () => {
        setData(arr)
        setPrice(0)
    }
    return (
        <div>
            <Header />
            <main className={`${styles_g.container} p-6 rounded-xl shadow-xl`}>
                <div className={`${styles.about}`}>
                    <div className={`${styles.abouttext}`}>
                        <div className={`${styles.main} `}>
                            <span className='text-2xl font-bold mb-2'>Конфигуратор системного блока онлайн</span>
                            <div className='mt-10 flex flex-row justify-between'>
                                <div className=''>
                                    <h1 className='text-2xl flex flex-row items-center'>
                                        Выберите видеокарту
                                    </h1>
                                    {/* {VideoItems} */}
                                    {
                                        Video_cards.map((Video_card) =>
                                            <li key={Video_card.id} className='p-4 flex flex-row space-x-12 w-11/12 mt-8 rounded-xl border-2 border-zinc-300 shadow-lg'>
                                                <img src="https://www.ironbook.ru/upload/resize_cache/iblock/877/877de3a302f6eb2ddb43abb5bc188c99/120_120_1/palit_gt_730.jpg" className=' w-32 h-32' />
                                                <div className=''>
                                                    <h1 className='text-2xl'>Название {Video_card.Name}</h1>
                                                    <p className='text-xl'>Обьем видео памяти: <span className='font-bold'>{Video_card.Video_memory_capacity}</span></p>
                                                    <p className='text-xl'>Цена: <span className='font-bold'>{Video_card.Price}</span></p>
                                                </div>
                                                <button className='border-2 mt-20 text-lg p-2 rounded-2xl hover:bg-gray-200' onClick={() => addComp(Video_card)}>Добавить</button>
                                            </li>
                                        )
                                    }
                                    <h1 className='text-2xl mt-10 flex flex-row items-center'>Выберите процессор</h1>
                                    {/* {ProcessorsItems} */}
                                    {
                                        Processors.map((Processor) =>
                                            <li key={Processor.id} className='p-4 flex flex-row space-x-12 mt-8 w-11/12 rounded-xl border-2 border-zinc-300 shadow-lg'>
                                                <img src="https://ironbook-bucket.storage.yandexcloud.net/iblock/b4c/b4c3850ca5357e3cb5f9e7cb17f75a81/intel_celeron.jpg" className=' w-32 h-32' />
                                                <div className=''>
                                                    <h1 className='text-2xl'>Название {Processor.Name}</h1>
                                                    <p className='text-xl'>Обьем видео памяти: <span className='font-bold'>{Processor.Number_of_threads}</span></p>
                                                    <p className='text-xl'>TDP: <span className='font-bold'>{Processor.TDP}</span></p>
                                                    <p className='text-xl'>Тактовая частота: <span className='font-bold'>{Processor.Clock_frequency}</span></p>
                                                </div>
                                                <button className='border-2 mt-20 text-lg p-2 rounded-2xl hover:bg-gray-200' onClick={() => addComp(Processor)} >Добавить</button>
                                            </li>
                                        )
                                    }
                                </div>
                                <div className={`p-2 bg-gray-200 ${styles.config_manager} rounded-xl`}>
                                    <div className={styles.config_manager_in}>
                                        <h1 className='text-2xl flex flex-row items-center mb-2'>
                                            Стоимость ПК
                                        </h1>
                                        <span className='flex justify-between'>
                                            <h1 className='text-2xl flex flex-row items-center'>
                                                Итого:
                                            </h1>
                                            <h1 className='text-2xl flex flex-row items-center'>
                                                {price} ₸
                                            </h1>
                                        </span>
                                        <span className={styles.btns}>
                                            <button className={`${styles.btn} ${styles.btn_1}`} onClick={() => { handleKorz() }}>Собрать</button>
                                            <button className={`${styles.btn} ${styles.btn_2}`} onClick={() => { handleClear() }}>Очистить</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Configurator;
