import React, { useState } from 'react'
import styles from './Tabs.module.css'
import Image from 'next/image';

export const Tabs = () => {
    const tabList = [
        {
            isActive: true,
            img: {
                src: "/stopwatch.png",
                width: 40,
                height: 52,
                alt: "watch",
            },
            label: "Высокая скорость обработки камня",
        },
        {
            isActive: false,
            img: {
                src: "/stairs.png",
                width: 67,
                height: 58,
                alt: "watch"
            },
            label: "Обработка труднодоступных поверхностей",
        },
        {
            isActive: false,
            img: {
                src: "/tile.png",
                width: 69,
                height: 56,
                alt: "watch"
            },
            label: "Зеркальное отражение",
        },
        {
            isActive: false,
            img: {
                src: "/wetFloor.png",
                width: 35,
                height: 53,
                alt: "watch",
            },
            label: "Техника безопасности по евро стандарту",
        }
    ]
    const [isActive, setIsActive] = useState(false)
    return (
        <div className={styles.tabs}>
            <ul className={styles.tabsMenu}>
                {tabList.map((item) => (<li onClick={() => setIsActive(!isActive)} className={`${styles.tabsItem} ${item.isActive && styles.active}`}><Image
                    src={item.img.src}
                    width={item.img.width}
                    height={item.img.height}
                    alt={item.img.alt}
                /><span>Высокая скорость обработки камня</span></li>))}
                {/* <li onClick={() => setIsActive(!isActive)} className={`${styles.tabsItem} ${isActive && styles.active}`}><Image
                    src="/stopwatch.png"
                    width={40}
                    height={52}
                    alt="watch"
                /><span>Высокая скорость обработки камня</span></li>
                <li onClick={() => setIsActive(!isActive)} className={`${styles.tabsItem} ${isActive && styles.active}`}><Image
                    src="/stairs.png"
                    width={67}
                    height={58}
                    alt="watch"
                /><span>Обработка труднодоступных поверхностей</span></li>
                <li onClick={() => setIsActive(!isActive)} className={`${styles.tabsItem} ${isActive && styles.active}`}><Image
                    src="/tile.png"
                    width={69}
                    height={56}
                    alt="watch"
                /><span>Зеркальное отражение</span></li>
                <li onClick={() => setIsActive(!isActive)} className={`${styles.tabsItem} ${isActive && styles.active}`}><Image
                    src="/wetFloor.png"
                    width={35}
                    height={53}
                    alt="watch"
                /><span>Техника безопасности по евро стандарту</span></li> */}
            </ul>
        </div>
    )
}
