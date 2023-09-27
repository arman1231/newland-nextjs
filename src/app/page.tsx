"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { russo } from './fonts'
import { Tabs } from './components/Tabs/Tabs'
import ImageGallery from "react-image-gallery";
import { Quiz } from './components/Quiz/Quiz'

const images = [
  {
    original: "/portfolio/p1.jpg",
    thumbnail: "/portfolio/p1t.jpg",
    originalHeight: 807,
    originalWidth: 1076,
    originalClass: styles.customImage,
  },
  {
    original: "/portfolio/p2.jpg",
    thumbnail: "/portfolio/p2t.jpg",
    originalHeight: 807,
    originalWidth: 1076,
    originalClass: styles.customImage,
  },
  {
    original: "/portfolio/p3.jpg",
    thumbnail: "/portfolio/p3t.jpg",
    originalHeight: 807,
    originalWidth: 1076,
    originalClass: styles.customImage,
  },
  {
    original: "/portfolio/p4.jpg",
    thumbnail: "/portfolio/p4t.jpg",
    originalHeight: 807,
    originalWidth: 1076,
    originalClass: styles.customImage,
  },
  {
    original: "/portfolio/p5.jpg",
    thumbnail: "/portfolio/p5t.jpg",
    originalHeight: 807,
    originalWidth: 1076,
    originalClass: styles.customImage,
  },
  {
    original: "/portfolio/p6.jpg",
    thumbnail: "/portfolio/p6t.jpg",
    originalHeight: 807,
    originalWidth: 1076,
    originalClass: styles.customImage,
  },
  {
    original: "/portfolio/p7.jpg",
    thumbnail: "/portfolio/p7t.jpg",
    originalHeight: 807,
    originalWidth: 1076,
    originalClass: styles.customImage,
  },
  {
    original: "/portfolio/p8.jpg",
    thumbnail: "/portfolio/p8t.jpg",
    originalHeight: 807,
    originalWidth: 1076,
    originalClass: styles.customImage,
  },
]

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
            <span style={{ fontWeight: "bold" }}>Мы используем современные средства обработки каменных поверхностей по технологии</span>
            <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>Klindex</span>
            <span style={{ fontWeight: '300' }}>- проверенная годами технология позволит ускорить процесс, сохранить деньги и время, увеличить срок службы</span>
          </div>
          <Tabs />
        </div>
      </section>
      <section className={styles.portfolio}>
        <div className="wrapper">
          <div className={russo.className}><h2 className={styles.portfolioTitle}><span style={{ color: 'var(--secondary-color)' }}>New Land</span> занимает лидирующие позиции на рынке</h2></div>
          <h3 className={styles.portfolioSubtitle}>Доверьте всю работу профессионалам</h3>
          <ImageGallery items={images} infinite={true} showFullscreenButton={false} showPlayButton={false} lazyLoad={true} />
        </div>
      </section>
      <section className={styles.smeta}>
        <div className="wrapper">
          <div className={styles.smetaWrapper}>
            <Image
              src="/smeta.jpg"
              width={607}
              height={301}
              alt="Мрамор"
            />
            <div className={styles.smetaText}>
              <div className={russo.className}><h2 className={styles.smetaTitle}>Работаем без подводных  камней</h2></div>
              <p className={styles.smetaSubtitle}>- сделаем расчет по смете, заключим договор, пропишем фиксированные сроки</p>
              <p className={styles.smetaSmalltext}>А еще мы прикрепим к вам личного менеджера по объекту, который проведет вас "за руку" на протяжении всего жизненного цикла проекта</p>
              <p className={styles.smetaSmalltext}>Ну и конечно все работы сдаются в срок и под ключ, вам просто не о чем будет волноваться</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.callback}>
        <div className="wrapper">
          <div className={russo.className}><h2 className={styles.portfolioTitle}>Не убедили?</h2></div>
          <p className={styles.callbackSubtitle}>- сделаем <span style={{ color: 'var(--secondary-color)' }}>пробник на 1 м2</span> абсолютно бесплатно</p>
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
      </section>
      <section className={styles.quiz}>
        <div className="wrapper">
          <div className={styles.quizWrapper}>
            <div className={styles.quizToptext}>
              <div className={styles.quizToptextLeft}><div className={russo.className}><h2 className={styles.quizTitle}>Ценовая политика</h2></div>
                <p style={{ fontSize: '24px' }}>- мы используем прогрессивную систему ценообразования, итоговый расчет зависит от ряда параметров</p>
              </div>
              <div className={styles.quizToptextRigth}><p style={{ fontWeight: 'bold', fontSize: '18px' }}>Пройдите короткий опрос <span style={{ color: 'var(--globalgreen)' }}>за 1 минуту</span></p>
                <p>и специалисты New Land рассчитают итоговую стоимость</p></div>
            </div>
            <Quiz />
          </div>
        </div>
      </section>
      <section className={styles.contacts}>
        <div className="wrapper">
          <div className={styles.toptextWrapper}>
            <div className={russo.className}><h2 className={styles.techTitle}>Мы всегда рады
              гостям в нашем офисе</h2></div>
            <p style={{ fontSize: '24px', textAlign: "center", marginBottom: "35px" }}>Специалисты с удовольствием
              проконсультируют вас по любому вопросу</p>
          </div>
          <ul className={styles.contactsList}>
            <li className={styles.contactsListItem}><Image
              src="/address.png"
              width={20}
              height={20}
              alt="Picture of the author"
            /><span className={styles.contactsListItemChild}>Адрес</span><span className={styles.contactsListItemChild2}>Москва, ул. Мосфильмовская 17Б</span></li>
            <li className={styles.contactsListItem}>
              <Image
                src="/map-email.png"
                width={20}
                height={20}
                alt="Picture of the author"
              />
              <span className={styles.contactsListItemChild}>Электронная почта</span>
              <a href="mailto:info@newland.su" className={styles.contactsListItemChild2}>info@newland.su</a>
            </li>
            <li className={styles.contactsListItem}>
              <Image
                src="/map-phone.png"
                width={20}
                height={20}
                alt="Picture of the author"
              />
              <span className={styles.contactsListItemChild}>Телефон</span>
              <a href="tel:+74993228803" className={styles.contactsListItemChild2}>+7 (499) 322-88-03</a>
            </li>
          </ul>
          <div className={styles.tools}>
            <Image
              src="/tools/1.jpg"
              width={238 * 0.8}
              height={318 * 0.8}
              alt="Picture of the author"
            />
            <Image
              src="/tools/2.jpg"
              width={382 * 0.8}
              height={287 * 0.8}
              alt="Picture of the author"
            />
            <Image
              src="/tools/3.jpg"
              width={174 * 0.8}
              height={232 * 0.8}
              alt="Picture of the author"
            />
            <Image
              src="/tools/4.jpg"
              width={317 * 0.8}
              height={288 * 0.8}
              alt="Picture of the author"
            />
            <Image
              src="/tools/5.jpg"
              width={200 * 0.8}
              height={345 * 0.8}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>
    </>
  )
}
