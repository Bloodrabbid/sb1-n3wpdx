import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'БУМ - Студия музыки',
  description: 'Музыкальная школа в Хабаровске',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}