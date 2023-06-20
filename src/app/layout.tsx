import './styles.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beehaw Mod Gen',
  description: 'A moderation comment generator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-200"}>{children}</body>
    </html>
  )
}
