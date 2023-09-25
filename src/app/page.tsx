"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { russo } from './fonts'
import { Tabs } from './components/Tabs/Tabs'

export default function Home() {
  return (
    <>
      <section className={styles.cubes}>
        <div className="wrapper">
          <div className={russo.className}>
            <h2 className={styles.cubesTitle}>Проводим реставрационные работы:</h2>
          </div>
          <div className={styles.cubesWrap}>
            <div className={styles.topCubes}>
              <div className={styles.cube} id={styles.cubeLeft}><span className={styles.cubesTitleLeft}>Мрамор</span><Image
                src="/cube-1.png"
                width={400}
                height={400}
                alt="Мрамор"
              /></div>
              <div className={styles.cube} id={styles.cubeRigth}><span className={styles.cubesTitleRigth}>Гранит</span><Image
                src="/cube-2.png"
                width={400}
                height={400}
                alt="Мрамор"
              /></div>
            </div>
            <div className={styles.bottomCubes}>
              <div className={styles.cube} id={styles.cubeLeft}><span className={styles.cubesTitleLeft}>Оникс</span><Image
                src="/cube-3.png"
                width={400}
                height={400}
                alt="Мрамор"
              /></div>
              <div className={styles.cube} id={styles.cubeRigth}><span className={styles.cubesTitleRigth}>Искусственный камень</span><Image
                src="/cube-4.png"
                width={400}
                height={400}
                alt="Мрамор"
              /></div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.technology}>
        <div className='wrapper'>
          <div className={russo.className}><h2 className={styles.techTitle}>Технология обработки</h2></div>
          <div className={styles.techSubtitle}>
            <span style={{fontWeight: "bold"}}>Мы используем современные средства обработки каменных поверхностей по технологии</span>
            <span style={{color: 'var(--secondary-color)', fontWeight: 'bold'}}>Klindex</span>
            <span style={{fontWeight: '100'}}>- проверенная годами технология позволит ускорить процесс, сохранить деньги и время, увеличить срок службы</span>
          </div>
          <Tabs />
        </div>
      </section>
    </>
  )
}
