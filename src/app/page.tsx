/* eslint-disable @next/next/no-img-element */
import { ProductCard } from '@/components/common/product-card'
import { SpinningText } from '@/components/ui/spinning-text'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-amber-100/20 grid grid-rows-[20px_1fr_auto_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <nav className="">
        <ul className="flex gap-x-2 md:gap-x-10 md:text-2xl text-sm items-center font-times uppercase leading-10">
          <li className="font-chomsky text-2xl md:text-5xl font-normal normal-case">
            Alegórica
          </li>
          <li>tienda</li>
          <li>nosotros</li>
          <li>galería</li>
        </ul>
      </nav>
      <main className="relative flex flex-col row-start-2 items-center sm:items-start w-full h-full">
        <div className="h-auto w-[60vw] absolute right-0 translate-x-1/4 -bottom-20 ">
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-3 min-h-max">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      <footer className="flex row-start-5 h-full gap-6 flex-wrap items-center justify-center">
        <div className="mr-10">
          <SpinningText
            radius={4.5}
            fontSize={0.8}
            className="font-medium leading-none tracking-widest"
          >
            {`alegorica • alegorica • `}
          </SpinningText>
        </div>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/alegoricaclub/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Siguenos →
        </a>
      </footer>
    </div>
  )
}
