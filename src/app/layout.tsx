import type { Metadata } from 'next'
import './globals.css'
import { playFairDisplay } from './fonts'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'tienda de ropa',
  description: 'alegorica'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={` ${playFairDisplay.variable} antialiased  bg-[#FEFAF4]`}
      >
        <div className="overflow-hidden grid grid-rows-[40px_auto_auto] items-center justify-items-center min-h-screen gap-12 md:gap-16 p-8 pb-20 sm:p-20 ">
          <Navbar className="row-start-1" />
          <div className="row-start-2 row-end-3 h-full">{children}</div>
          <Footer className="row-start-3" />
        </div>
      </body>
    </html>
  )
}
