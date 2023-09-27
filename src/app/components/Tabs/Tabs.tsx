import React, { useState } from 'react'
import styles from './Tabs.module.css'
import Image from 'next/image';

export const Tabs = () => {
    const tabList = [
        {
            img: {
                src: "/stopwatch.png",
                width: 40,
                height: 52,
                alt: "watch",
            },
            img2: {
                src: '/tab1.png',
                width: 581,
                height: 395,
                alt: "нью лэнд"
            },
            content: {
                title: "Работаем гораздо быстрее других",
                p1: "Используем мощное дорогостоящее оборудование Klindex с входным порогом от 1млн рублей",
                p2: "Работаем по утвержденным технологиям, совмещая с собственными наработками",
                p3: "Большой штат обученных сотрудников",
            },
            label: "Высокая скорость обработки камня",
        },
        {
            img: {
                src: "/stairs.png",
                width: 67,
                height: 58,
                alt: "watch"
            },
            img2: {
                src: '/tab2.jpg',
                width: 581,
                height: 395,
                alt: "нью лэнд"
            },
            content: {
                title: "Знаем все труднодоступные места",
                p1: "Участки под сантехникой, вокруг  не движущихся предметов, ступеньки, стены и углы будут обработаны",
                p2: "В нашем арсенале имеется специальное оборудование для таких поверхностей",
                p3: "Вы не увидите отличий от открытых участков",
            },
            label: "Обработка труднодоступных поверхностей",
        },
        {
            img: {
                src: "/tile.png",
                width: 69,
                height: 56,
                alt: "watch"
            },
            img2: {
                src: '/tab3.jpg',
                width: 581,
                height: 395,
                alt: "нью лэнд"
            },
            content: {
                title: "После нашей работы можно будет бриться",
                p1: "Мы гарантируем зеркальное отражение",
                p2: "Камень будет выглядеть лучше чем с завода",
                p3: "За глянцем скрывается защитный слой, который защищает камень от грязи и влаги, а так же увеличивает срок службы",
            },
            label: "Зеркальное отражение",
        },
        {
            img: {
                src: "/wetFloor.png",
                width: 35,
                height: 53,
                alt: "watch",
            },
            img2: {
                src: '/tab4.jpg',
                width: 581,
                height: 395,
                alt: "нью лэнд"
            },
            content: {
                title: "Безопасность превыше всего",
                p1: "Все наши сотрудники обучены технике безопасности, и перед каждым объектом получают новый инструктаж",
                p2: "Зона где мы работаем всегда огорожена перегородкой либо сигнальной лентой",
                p3: "Вся мебель, ковры и неподвижные части интерьера будут защищены с помощью специальной пленки",
            },
            label: "Техника безопасности по евро стандарту",
        }
    ]
    const [activeTab, setActiveTab] = useState("Высокая скорость обработки камня");
    return (
        <div className={styles.tabs}>
            <ul className={styles.tabsMenu}>
                {tabList.map((item) => (<li onClick={() => setActiveTab(item.label)} className={`${styles.tabsItem} ${activeTab === item.label && styles.actives}`}><Image
                    src={item.img.src}
                    width={item.img.width}
                    height={item.img.height}
                    alt={item.img.alt}
                /><span>{item.label}</span></li>))}
            </ul>
            {tabList.map((el) => {
                return (
                    <div
                        className={`${styles.tab} ${el.label === activeTab ? styles.active : styles.inactive
                            }`}
                    >
                        <Image
                            src={el.img2.src}
                            width={581}
                            height={395}
                            alt={el.img2.alt}
                        />
                        <div className={styles.tabContentText}>
                            <h3 className={styles.tabContentTitle}>{el.content?.title}</h3>
                            <p className={styles.tabContentP}>{el.content?.p1}</p>
                            <p className={styles.tabContentP}>{el.content?.p2}</p>
                            <p className={styles.tabContentP}>{el.content?.p3}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
