import React from 'react'
import styles from './WorkingHours.module.css'

export const WorkingHours = () => {
  return (
    <div className={styles.workingHours}>
        <span className={styles.hours}>
        с 9:00 до 21:00
        </span>
        <a className={styles.phone} href="tel:+749932288803">+7 (499) 322 88 03</a>
    </div>
  )
}
