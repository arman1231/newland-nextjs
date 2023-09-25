import React from 'react'
import styles from './Logo.module.css'
import Image from 'next/image'

export const Logo = () => {
  return (
    <div className={styles.logo}>
        <Image
      src="/logo.jpg"
      width={64}
      height={64}
      alt="Picture of the author"
    />
    <span className={styles.logoTopText}>new</span>
    <span className={styles.logoBottomText}>land</span>
    </div>
  )
}
