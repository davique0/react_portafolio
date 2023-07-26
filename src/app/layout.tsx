import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import favicon from '../../public/favicon.ico'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mario Gutierrez Portfolio',
  description: 'Your best candidate\'s Portfolio',
  icons: {
    icon: '../../public/favicon.ico'
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
