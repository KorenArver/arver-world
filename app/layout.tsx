import { Analytics } from '@vercel/analytics/react'
import { signika } from './fonts'
import './globals.css'

export const metadata = {
  title: 'Arver world',
  description: 'A chill place about creative topics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${signika.variable} font-signikaNegative`}>
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
