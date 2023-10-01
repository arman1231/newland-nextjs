import React, { FormEvent, useRef, useState } from 'react';
import styles from './Form.module.css';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

enum Locations {
    MODAL = "MODAL",
    HEADER = "HEADER",
    PAGE = "PAGE",
    QUIZ = "QUIZ"
}

interface IFormProps {
    location: keyof typeof Locations;
    data?: any;
}

export const Form: React.FC<IFormProps> = ({ location, data }) => {
    const form = useRef<HTMLFormElement>(null);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState<string | null>(null);

    const formStyles = {
        [Locations.MODAL]: styles.formModal,
        [Locations.HEADER]: styles.formHeader,
        [Locations.PAGE]: styles.formPage,
        [Locations.QUIZ]: styles.formQuiz
    };

    const handleSendForm = (e: FormEvent) => {
        e.preventDefault();

        if (form.current) {
            const formData = new FormData(form.current);
            const newData = {...data, user_name: formData.get('user_name'), user_phone: formData.get('user_phone')};
            const result = location === "QUIZ" ? newData : form.current;         
            
            emailjs.send("service_7eyigsk","template_ugsh4o8", result, 'WifPaa3I-RgQMEIKA')
                .then((result) => {
                    setName('');
                    setPhoneNumber('');
                    setMessage('Ваша информация передана успешно');
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    return (
        <form ref={form} className={formStyles[location]}>
            {location !== "QUIZ" &&  <h3>Закажите бесплатный пробный образец на 1 м2</h3>}
            <input
                className={styles.input}
                type='text'
                placeholder='Ваше имя'
                name="user_name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                className={styles.input}
                type='text'
                placeholder='Введите номер телефона'
                name='user_phone'
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
            />
            <button className={styles.submit} type='submit' onClick={handleSendForm} disabled={!name || !phoneNumber}>Отправить</button>
            {message && <p style={{color: 'var(--globalgreen)'}}>{message}</p>}
            <div className={styles.formCreds}>
                <p className={styles.formCred}>
                    < Image unoptimized src="/nextImages/form-check.png" width={20} height={20} alt="Picture of the author" />
                    Согласие на обработку персональных данных
                </p>
                <p className={styles.formCred}>
                    < Image unoptimized src="/nextImages/form-shield.png" width={20} height={20} alt="Picture of the author" />
                    Гарантия конфидециальности
                </p>
            </div>
        </form>
    );
};