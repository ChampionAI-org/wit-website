import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MotionProvider from '../components/MotionProvider'

export const metadata: Metadata = {
  title: 'Wit AI',
  description: 'Wit is your AI partner to think, act, learn, iterate — and endure — until you win.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-wit-light dark:bg-wit-dark text-slate-900 dark:text-white antialiased">
        <MotionProvider>
          <Header />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
