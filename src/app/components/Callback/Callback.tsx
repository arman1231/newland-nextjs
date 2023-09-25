import React from 'react'
import styles from './Callback.module.css'

interface ICallbackProps {
    handleClick: () => void;
}

export const Callback = ({ handleClick }: ICallbackProps) => {
  return (
    <div className={styles.callback}>
        <span>
        Работаем с 1997 года
        </span>
        <button onClick={handleClick} className={styles.button}>Обратный звонок</button>
    </div>
  )
}
