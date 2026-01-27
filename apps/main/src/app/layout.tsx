import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MotionProvider from '../components/MotionProvider'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Wit AI',
  description: 'Wit is an AI personal assistant for real estate agents that owns follow ups, pipeline, and next steps.',
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
        <Script
          id="getlaunchlist-diy"
          src="https://getlaunchlist.com/js/widget-diy.js"
          strategy="afterInteractive"
        />
        <MotionProvider>
          <Header />
          <main className="min-h-screen pt-16 snap-y snap-proximity">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
