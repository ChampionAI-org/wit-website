import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MotionProvider from '../components/MotionProvider'

export const metadata: Metadata = {
  title: 'Wit AI',
  description: 'Wit is your AI partner to think, act, learn, iterate — and endure — until you win.',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-16">
      <body className="min-h-screen bg-wit-light dark:bg-zinc-950 text-slate-900 dark:text-white antialiased overflow-x-hidden">
        <MotionProvider>
          <Header />
          <main className="min-h-screen pt-16 snap-y snap-proximity">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
