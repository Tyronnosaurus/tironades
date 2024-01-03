import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
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
      <body className={inter.className}>
        <h1 className="text-center text-4xl md:text-5xl font-bold m-8">Tironades</h1>
        <div className="m-auto w-[50%]">
          <h2 className="text-center text-1xl md:text-2xl mt-8">40 anys d&apos;activitats pioneres al massís del Port i serres veïnes</h2>
          <h2 className="text-right text-1xl md:text-2xl mb-8">- Joan Tiron i companys -</h2>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
