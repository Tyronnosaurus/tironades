import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from '@/components/Header'
import Footer from "@/components/Footer"


const inter = Inter({ subsets: ['latin'] })   // Default font

export const metadata: Metadata = {
  title: 'Tironades',
  description: "Recull d'excursions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-[100vh]`}>

        <Header/>

        <div className="grow">
          {children}
        </div>

        <Footer/>

      </body>
    </html>
  )
}
