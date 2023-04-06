import './globals.css'

export const metadata = {
  title: 'Arver world',
  description: 'A chill place about arousing topics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
