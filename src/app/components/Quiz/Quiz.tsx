import React, { useState } from 'react';
import styles from './Quiz.module.css'
import Image from 'next/image'
import { Form } from '../Form/Form';

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
        answers: ['Мрамор', 'Гранит', 'Оникс', 'Травертин', 'Исскуственный', 'Empty'],
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
    const [activePage, setActivePage] = useState(1);
    const [answers, setAnswers] = useState<any>();
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    
    const nextPage = () => {
        setActivePage(activePage + 1);
        setSelectedAnswer(null);
    };

    const handleInputChange = (event: { target: { value: any; }; }) => {
        const inputValue = event.target.value;
        setAnswers((prevAnswers: any) => ({
            ...prevAnswers,
            [activePage]: inputValue,
        }));
        setSelectedAnswer(inputValue);
    };

    return (
        <div className={styles.quiz}>
            {data.map((page, i) => {
                if (page.id === 1 && page.id === activePage) {
                    return (
                        <div className={styles.frontpage} key={i}>
                            <Image unoptimized
                            className={styles.quizImg}
                                src="/nextImages/rotor.jpg"
                                width={450}
                                height={350}
                                alt="Picture of the author"
                            />
                            <div>
                                <h3 className={styles.frontpageTitle}>{page.title}</h3>
                                <p className={styles.frontpageSubtitle}>{page.subtitle}</p>
                                <button onClick={() => setActivePage(2)} className={styles.fronpageButton}>Начать</button>
                            </div>
                        </div>

                    )
                }
                if (page.id > 1 && page.id < 5 && page.id === activePage) {
                    return (
                        <div className={styles.quizMainWrapper}>
                            <div className={styles.quizMainContent}>
                                <h3 className={styles.pageTitle}>{page.title}</h3>
                                <p className={styles.pageSubtitle}>{page.subtitle}</p>
                                <div className={styles.answers}>
                                    {page.answers?.map((answer, i) => {
                                        if (answer === 'Empty') {
                                            return (
                                                <input
                                                    key={i}
                                                    className={styles.input}
                                                    type='text'
                                                    placeholder='Другое...'
                                                    onChange={handleInputChange} // handle input change
                                                />
                                            );
                                        }
                                        return (
                                            <div
                                                key={i}
                                                onClick={() => {
                                                    setAnswers((prevAnswers: any) => ({
                                                        ...prevAnswers,
                                                        [page.title]: answer,
                                                    }));
                                                    setSelectedAnswer(answer);
                                                }}
                                                className={`${styles.answer} ${answer === selectedAnswer ? styles.selected : ''
                                                    }`}
                                            >
                                                {answer}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                }
                if (page.id === 5 && page.id === activePage) {
                    return (
                        <div className={styles.frontpage} key={i}>
                            <div>
                                <h3 className={styles.frontpageTitle}>{page.title}</h3>
                                <p className={styles.frontpageSubtitle}>{page.subtitle}</p>
                                <Form location='QUIZ' data={answers} />
                                {/* <button onClick={() => setActivePage(1)} className={styles.fronpageButton}>Отправить</button> */}
                            </div>
                        </div>

                    )
                }
            })}
            {activePage > 1 && activePage < 5 && <div className={styles.quizFooter}>
                <button
                    onClick={nextPage}
                    className={styles.fronpageButton}
                    disabled={selectedAnswer === null}
                >
                    Далее
                </button>
            </div>}
        </div>
    )
}
