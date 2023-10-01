'use client';

import { FormEvent, ReactEventHandler, useState } from 'react';
import { Callback } from './Callback/Callback';
import styles from './Header.module.css';
import { Logo } from './Logo/Logo';
import { WorkingHours } from './WorkingHours/WorkingHours';
import { russo } from '../fonts';
import Image from 'next/image';
import Modal from './Modal/Modal';
import { Form } from './Form/Form';

interface IHeaderProps {
  showBackgroundImage: boolean;
}

const Header = ({ showBackgroundImage }: IHeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSendForm = (e: FormEvent) => {
    e.preventDefault()
  }
  const modal = isModalOpen ? (
    <Modal onClose={() => setIsModalOpen(false)}>
      <Form location='MODAL' />
    </Modal>
  ) : null;
  if (showBackgroundImage) {
    return (
      <header className={styles.headerWrapper}>
        <div className='wrapper'>
          {modal}
          <div className={styles.header}>
            <a href="https://xn--80adctakdemhbo3b.xn--p1ai/shlifovka_mramora_granita-landing.html">
              <div className={styles.logoExtended}>
                <Logo />
                <span className={styles.logoExtendedText}>Профессиональная шлифовка и кристаллизация мрамора и гранита от "Нью Лэнд"</span>
              </div>
            </a>
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
            <Form location='HEADER' />
          </div>
        </div>
      </header>
    );
  }

  return (
    <footer>
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
    </footer>
  );
};

export default Header;