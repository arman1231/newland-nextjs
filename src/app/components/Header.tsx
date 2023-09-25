'use client'

import { useState } from 'react';
import { Callback } from './Callback/Callback';
import styles from './Header.module.css';
import { Logo } from './Logo/Logo';
import { WorkingHours } from './WorkingHours/WorkingHours';
import { russo } from '../fonts';
import Image from 'next/image';

interface IHeaderProps {
  showBackgroundImage: boolean;
}

const Header = ({ showBackgroundImage }: IHeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  if (showBackgroundImage) {
    return <header className={styles.headerWrapper}>
      <div className='wrapper'>
        <div className={styles.header}>
          <div className={styles.logoExtended}>
            <Logo />
            <span className={styles.logoExtendedText}>Профессиональная шлифовка и кристаллизация мрамора и гранита от "Нью Лэнд"</span>
          </div>
          <WorkingHours />
          <Callback handleClick={() => setIsModalOpen(!isModalOpen)} />
        </div>
        <div className={russo.className}>
          <h1 className={styles.title}>Шлифовка мрамора и гранита</h1>
        </div>
        <p className={styles.underTitle}>с последующей кристаллизацией от 290 руб./м2 под ключ</p>
        <div className={styles.advantage}>
          <ul className={styles.advantageList}>
            <li className={styles.listItem}>Устраним трещины, сколы и царапины</li>
            <li className={styles.listItem}>Сгладим перепады между плитами</li>
            <li className={styles.listItem}>Восстановим блеск, удалим пятна, защитим поверхность</li>
            <li className={styles.listItem}>Запломбируем швы и очистим от плесени</li>
          </ul>
          <span className={styles.curlybrace}>{'}'}</span>
          <form className={styles.form}>
            <h3>Закажите бесплатный пробный образец на 1 м2</h3>
            <input className={styles.input} type='text' placeholder='Ваше имя' />
            <input className={styles.input} type='text' placeholder='Введите номер телефона' />
            <button className={styles.submit} type='submit'>Отправить</button>
            <div className={styles.formCreds}>
              <p className={styles.formCred}><Image
                src="/form-check.png"
                width={20}
                height={20}
                alt="Picture of the author"
              />Согласие на обработку персональных данных</p>
              <p className={styles.formCred}><Image
                src="/form-shield.png"
                width={20}
                height={20}
                alt="Picture of the author"
              />Гарантия конфидециальности</p>
            </div>
          </form>
        </div>
      </div>
    </header>;
  }
  return <footer>
    <div className='wrapper'>
      <div className={styles.header}>
        <div className={styles.logoExtended}>
          <Logo />
          <span className={styles.logoExtendedText}>Профессиональная шлифовка и кристаллизация мрамора и гранита от "Нью Лэнд"</span>
        </div>
        <WorkingHours />
        <Callback handleClick={() => setIsModalOpen(!isModalOpen)} />
      </div>
    </div>
  </footer>;
}

export default Header;