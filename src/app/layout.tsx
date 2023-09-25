import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'
import { lato } from './fonts'


export const metadata: Metadata = {
  title: 'Полировка и шлифовка мрамора по лучшей цене в Москве',
  description: 'Полировка и шлифовка мрамора и гранита вернут былой блеск и красоту камню. У нас доступные цены и высокий уровень обслуживания клиентов',
  keywords: 'полировка мрамора, шлифовка мрамора, полировка гранита',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header showBackgroundImage={true} />
          {children}
        <Header showBackgroundImage={false} />
        </body>
    </html>
  )
}
