import React from 'react';
import styles from './Configurator.module.css'
import styles_g from '../../components/styles/Global.module.css'
import Header from '../home/components/Header/Header'
import { useState } from 'react'
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
        Price: '649990'
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
        Price: '649990'
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
        Price: '649990'
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
        Price: '122990'
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
        Price: '149990'
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
    const addComp = (newObj) => {
        setData(prevArray => [...prevArray, newObj]);
        console.log(data)
    }
    const handleKorz = () => {
        const myObject = data;
        navigate('/Cart/', { state: myObject });
    };
    return (
        <div>
            <Header />
            <main className={`${styles_g.container} p-6 rounded-xl shadow-xl`}>
                <div className={`${styles.about}`}>
                    <div className={`${styles.abouttext}`}>
                        <div className={`${styles.main} `}>
                            <h1 className='text-2xl font-bold mb-2'>Конфигуратор системного блока онлайн</h1>
                            <ul className='text-xl pl-3 ul'>
                                <li>Собрать компьютер онлайн - с проверкой совместимости</li>
                                <li>Собрать компьютер - бесплатная сборка и быстрая доставка</li>
                                <li>Более 1000 комплектующих в конфигураторе ПК</li>
                            </ul>
                            <div className='mt-20 flex flex-row justify-between'>
                                <div className=''>
                                    <h1 className='text-2xl flex flex-row items-center'>
                                        <svg className='pr-2' xmlns="http://www.w3.org/2000/svg" width="48" height="32" viewBox="0 0 48 32" fill="none">
                                            <g clip-path="url(#clip0)">
                                                <path d="M35.1992 12L37.6192 16.44L39.7992 14.1L35.1992 12Z" fill="#151528" />
                                                <path d="M32.7796 7.56006L30.5996 9.90006L35.1996 12.0001L32.7796 7.56006Z" fill="#151528" />
                                                <path d="M37.4592 7.46997L35.1992 12L39.7292 9.73997L37.4592 7.46997Z" fill="#151528" />
                                                <path d="M35.1999 12L30.6699 14.26L32.9399 16.53L35.1999 12Z" fill="#151528" />
                                                <path d="M39.9992 10.4L35.1992 12L39.9992 13.6V10.4Z" fill="#151528" />
                                                <path d="M30.4004 10.4V13.6L35.2004 12L30.4004 10.4Z" fill="#151528" />
                                                <path d="M36.7996 7.19995H33.5996L35.1996 12L36.7996 7.19995Z" fill="#151528" />
                                                <path d="M35.1996 12L33.5996 16.8H36.7996L35.1996 12Z" fill="#151528" />
                                                <path d="M35.1997 10.4C34.8832 10.4 34.5739 10.4939 34.3108 10.6697C34.0477 10.8455 33.8425 11.0954 33.7214 11.3878C33.6003 11.6801 33.5686 12.0018 33.6303 12.3122C33.6921 12.6226 33.8446 12.9076 34.0683 13.1314C34.2921 13.3552 34.5772 13.5075 34.8876 13.5693C35.1979 13.631 35.5196 13.5993 35.812 13.4782C36.1044 13.3571 36.3542 13.152 36.53 12.8889C36.7058 12.6258 36.7997 12.3165 36.7997 12C36.7997 11.5757 36.6311 11.1687 36.331 10.8687C36.031 10.5686 35.624 10.4 35.1997 10.4Z" fill="#151528" />
                                                <path d="M35.1993 6C36.386 6 37.5459 6.35188 38.5326 7.01117C39.5193 7.67046 40.2884 8.60753 40.7425 9.70389C41.1966 10.8002 41.3154 12.0067 41.0839 13.1706C40.8524 14.3344 40.2811 15.4035 39.4419 16.2426C38.6028 17.0818 37.5337 17.6532 36.3698 17.8847C35.2059 18.1162 33.9995 17.9974 32.9031 17.5433C31.8068 17.0892 30.8697 16.3201 30.2104 15.3334C29.5511 14.3467 29.1993 13.1867 29.1993 12C29.1993 10.4087 29.8314 8.88257 30.9566 7.75735C32.0818 6.63214 33.608 6 35.1993 6ZM35.1993 4C33.617 4 32.0703 4.46918 30.7547 5.34824C29.4391 6.22729 28.4137 7.47673 27.8082 8.93854C27.2027 10.4003 27.0443 12.0089 27.353 13.5607C27.6616 15.1125 28.4236 16.538 29.5424 17.6568C30.6612 18.7757 32.0866 19.5376 33.6385 19.8463C35.1903 20.155 36.7989 19.9965 38.2607 19.391C39.7225 18.7855 40.9719 17.7601 41.851 16.4445C42.7301 15.129 43.1993 13.5822 43.1993 12C43.1993 9.87824 42.3564 7.84343 40.8561 6.34314C39.3558 4.84285 37.321 4 35.1993 4Z" fill="#151528" />
                                                <path d="M16 12L18.42 16.44L20.6 14.1L16 12Z" fill="#151528" />
                                                <path d="M13.5804 7.56006L11.4004 9.90006L16.0004 12.0001L13.5804 7.56006Z" fill="#151528" />
                                                <path d="M18.26 7.46997L16 12L20.53 9.73997L18.26 7.46997Z" fill="#151528" />
                                                <path d="M16.0007 12L11.4707 14.26L13.7407 16.53L16.0007 12Z" fill="#151528" />
                                                <path d="M20.8 10.4L16 12L20.8 13.6V10.4Z" fill="#151528" />
                                                <path d="M11.1992 10.4V13.6L15.9992 12L11.1992 10.4Z" fill="#151528" />
                                                <path d="M17.6004 7.19995H14.4004L16.0004 12L17.6004 7.19995Z" fill="#151528" />
                                                <path d="M16.0004 12L14.4004 16.8H17.6004L16.0004 12Z" fill="#151528" />
                                                <path d="M16.0003 10.4C15.6839 10.4 15.3745 10.4939 15.1114 10.6697C14.8483 10.8455 14.6433 11.0954 14.5222 11.3878C14.4011 11.6801 14.3694 12.0018 14.4311 12.3122C14.4929 12.6226 14.6452 12.9076 14.869 13.1314C15.0928 13.3552 15.3778 13.5075 15.6882 13.5693C15.9986 13.631 16.3203 13.5993 16.6126 13.4782C16.905 13.3571 17.155 13.152 17.3308 12.8889C17.5066 12.6258 17.6004 12.3165 17.6004 12C17.6004 11.5757 17.4319 11.1687 17.1318 10.8687C16.8318 10.5686 16.4247 10.4 16.0003 10.4Z" fill="#151528" />
                                                <path d="M15.9999 6C17.1866 6 18.3467 6.35188 19.3334 7.01117C20.3201 7.67046 21.0891 8.60753 21.5433 9.70389C21.9974 10.8002 22.1162 12.0067 21.8847 13.1706C21.6532 14.3344 21.0817 15.4035 20.2426 16.2426C19.4035 17.0818 18.3345 17.6532 17.1706 17.8847C16.0067 18.1162 14.8003 17.9974 13.7039 17.5433C12.6075 17.0892 11.6704 16.3201 11.0112 15.3334C10.3519 14.3467 9.99992 13.1867 9.99992 12C9.99992 10.4087 10.6322 8.88257 11.7574 7.75735C12.8826 6.63214 14.4086 6 15.9999 6ZM15.9999 4C14.4177 4 12.8711 4.46918 11.5555 5.34824C10.2399 6.22729 9.21443 7.47673 8.60893 8.93854C8.00343 10.4003 7.84505 12.0089 8.15373 13.5607C8.46241 15.1125 9.22424 16.538 10.3431 17.6568C11.4619 18.7757 12.8874 19.5376 14.4393 19.8463C15.9911 20.155 17.5996 19.9965 19.0614 19.391C20.5233 18.7855 21.7727 17.7601 22.6518 16.4445C23.5308 15.129 23.9999 13.5822 23.9999 12C23.9999 9.87824 23.1571 7.84343 21.6568 6.34314C20.1565 4.84285 18.1217 4 15.9999 4Z" fill="#151528" />
                                                <path d="M2.80005 2V30H2V2H2.80005ZM3.20007 0H1.6001C1.17575 0 0.768686 0.16857 0.468628 0.468628C0.16857 0.768686 0 1.17566 0 1.60001V30.4C0 30.6101 0.0414186 30.8182 0.121826 31.0123C0.202234 31.2064 0.320054 31.3828 0.468628 31.5313C0.617202 31.6799 0.793672 31.7978 0.987793 31.8782C1.18191 31.9586 1.38998 32 1.6001 32H3.20007C3.41019 32 3.61826 31.9586 3.81238 31.8782C4.0065 31.7978 4.18285 31.6799 4.33142 31.5313C4.47999 31.3828 4.59782 31.2064 4.67822 31.0123C4.75863 30.8182 4.80005 30.6101 4.80005 30.4V1.60001C4.80005 1.17566 4.63148 0.768686 4.33142 0.468628C4.03136 0.16857 3.62442 0 3.20007 0Z" fill="#151528" />
                                                <path d="M35.6001 24.4V26H30.8V24.4H35.6001ZM36 22.4H30.4301C30.0057 22.4 29.5988 22.5686 29.2987 22.8687C28.9986 23.1687 28.8301 23.5757 28.8301 24V26.4C28.8301 26.6101 28.8715 26.8182 28.9519 27.0123C29.0323 27.2064 29.1501 27.3828 29.2987 27.5314C29.4473 27.6799 29.6236 27.7978 29.8177 27.8782C30.0119 27.9586 30.2199 28 30.4301 28H36.03C36.2401 28 36.4482 27.9586 36.6423 27.8782C36.8365 27.7978 37.0128 27.6799 37.1614 27.5314C37.31 27.3828 37.4279 27.2064 37.5083 27.0123C37.5887 26.8182 37.63 26.6101 37.63 26.4V24C37.63 23.5757 37.4614 23.1687 37.1614 22.8687C36.8613 22.5686 36.4544 22.4 36.03 22.4H36Z" fill="#151528" />
                                                <path d="M25.1997 24.4V26H8.42969V24.4H25.2297H25.1997ZM25.6296 22.4H8.02966C7.60532 22.4 7.19837 22.5686 6.89832 22.8687C6.59826 23.1687 6.42969 23.5757 6.42969 24V26.4C6.42969 26.6101 6.47111 26.8182 6.55151 27.0123C6.63192 27.2064 6.74974 27.3828 6.89832 27.5314C7.04689 27.6799 7.22324 27.7978 7.41736 27.8782C7.61148 27.9586 7.81955 28 8.02966 28H25.6296C25.8398 28 26.0478 27.9586 26.2419 27.8782C26.4361 27.7978 26.6125 27.6799 26.7611 27.5314C26.9097 27.3828 27.0275 27.2064 27.1079 27.0123C27.1883 26.8182 27.2297 26.6101 27.2297 26.4V24C27.2297 23.5757 27.0612 23.1687 26.7611 22.8687C26.4611 22.5686 26.054 22.4 25.6296 22.4Z" fill="#151528" />
                                                <path d="M45.9991 2V22H5.19922V2H45.9991ZM46.3992 0H4.79919C4.37485 0 3.9679 0.16857 3.66785 0.468628C3.36779 0.768686 3.19922 1.17566 3.19922 1.60001V22.4C3.19922 22.6101 3.24064 22.8182 3.32104 23.0123C3.40145 23.2064 3.51927 23.3828 3.66785 23.5313C3.81642 23.6799 3.99277 23.7978 4.18689 23.8782C4.38101 23.9586 4.58908 24 4.79919 24H46.4292C46.6393 24 46.8474 23.9586 47.0415 23.8782C47.2356 23.7978 47.412 23.6799 47.5605 23.5313C47.7091 23.3828 47.8269 23.2064 47.9073 23.0123C47.9878 22.8182 48.0292 22.6101 48.0292 22.4V1.60001C48.0292 1.17566 47.8606 0.768686 47.5605 0.468628C47.2605 0.16857 46.8535 0 46.4292 0H46.3992Z" fill="#151528" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="48" height="32" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Выберите видеокарту
                                    </h1>
                                    {/* {VideoItems} */}
                                    {
                                        Video_cards.map((Video_card) =>
                                            <li className='p-4 flex flex-row space-x-12 w-11/12 mt-8 rounded-xl border-2 border-zinc-300 shadow-lg'>
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
                                            <li className='p-4 flex flex-row space-x-12 mt-8 w-11/12 rounded-xl border-2 border-zinc-300 shadow-lg'>
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
                                    <h1 className='text-2xl flex flex-row items-center mb-2'>
                                        Стоимость ПК
                                    </h1>
                                    <span className='flex justify-between'>
                                        <h1 className='text-2xl flex flex-row items-center'>
                                            Итого:
                                        </h1>
                                        <h1 className='text-2xl flex flex-row items-center'>
                                            0 ₸
                                        </h1>
                                    </span>
                                    <span className={styles.btns}>
                                        <button className={`${styles.btn} ${styles.btn_1}`} onClick={() => { handleKorz() }}>Собрать</button>
                                        <button className={`${styles.btn} ${styles.btn_2}`}>Очистить</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Configurator;
