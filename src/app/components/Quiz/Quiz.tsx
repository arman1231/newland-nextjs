import React from 'react';
import styles from './Quiz.module.css'
import Image from 'next/image'

const data = [
    {
        id: 1,
        title: 'Ответьте на несколько вопросов для составления сметы',
        subtitle: 'По итогам опроса вы получите ценовое предложение',
        buttonText: 'Начать',
    },
    {
        id: 2,
        title: 'Какой вид камня требуется обработать?',
        subtitle: 'Выберите один из пунктов',
        answers: ['Мрамор', 'Гранит', 'Оникс', 'Исскуственный', 'Empty'],
        buttonText: 'Далее',
    },
    {
        id: 3,
        title: 'Оцените состояние поверхности камня',
        subtitle: 'Оцените на сколько изношен камень',
        answers: ['Новый(только постелен)', 'Средне изношен, без перепадов, трещин, сколов', 'Критически изношен, местами перепады, пятна, сколы, трещины', 'Empty'],
        buttonText: 'Далее',
    },
    {
        id: 4,
        title: 'Какой объем требуется обработать?',
        subtitle: null,
        range: [1, 1000],
        answers: ['Empty'],
        buttonText: 'Далее',
    },
    {
        id: 5,
        title: 'Для получения результатов заполните форму',
        subtitle: null,
        range: null,
        answers: null,
        buttonText: null,
    },
]

export const Quiz = () => {
    return (
        <div className={styles.quiz}>
            {data.map((page, i) => {
                if (page.id === 1) {
                    return (
                        <div className={styles.frontpage}>
                            <Image
                                src="/rotor.jpg"
                                width={450}
                                height={350}
                                alt="Picture of the author"
                            />
                            <div>
                            <h3 className={styles.frontpageTitle}>{page.title}</h3>
                            <p className={styles.frontpageSubtitle}>{page.subtitle}</p>
                            <button className={styles.fronpageButton}>Начать</button>
                            </div>
                        </div>

                    )
                }
            })}
        </div>
    )
}
