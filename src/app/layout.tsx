import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'
import { lato } from './fonts'


export const metadata: Metadata = {
  title: 'Полировка и шлифовка мрамора по лучшей цене в Москве',
  description: 'Полировка и шлифовка мрамора и гранита вернут былой блеск и красоту камню. У нас доступные цены и высокий уровень обслуживания клиентов',
  keywords: 'полировка мрамора, шлифовка мрамора, полировка гранита',
  viewport: "width=device-width, initial-scale=1",
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
      </body>
    </html>
  )
}
