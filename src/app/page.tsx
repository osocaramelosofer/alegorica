/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import Catalogue from '@/components/products/catalogue'

export default function Home() {
  return (
    <div className="overflow-hidden bg-amber-100/20 grid grid-rows-[20px_1fr_auto_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <Navbar />
      <main className="relative flex flex-col row-start-2 items-center sm:items-start w-full h-full">
        <div className="h-auto w-[60vw] absolute right-0 translate-x-1/4 -bottom-20">
          <img
            src="/images/hero-img.webp"
            alt="walter"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex w-full h-full items-center ">
          <span
            className="leading-tight font-chomsky text-[30vw] font-normal tracking-tighter pointer-events-none select-none"
            aria-hidden
          >
            alegórica
          </span>
        </div>
        <span className="md:ml-10 mr-20 md:mr-0 font-playFair text-black font-extrabold text-xl md:text-4xl italic">
          Sé parte del club
        </span>
      </main>
      <section className="row-start-3 h-full w-full">
        <h2 className="text-6xl text-center mb-10 font-times ">Prendas</h2>
        <Catalogue />
      </section>
      <Footer />
    </div>
  )
}
