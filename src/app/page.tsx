/* eslint-disable @next/next/no-img-element */
import Catalogue from '@/components/products/catalogue'

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_auto] gap-20 md:gap-28">
      <main className="row-start-1 relative flex flex-col items-center sm:items-start w-full h-full">
        <div className="flex flex-col items-center ">
          <div>
            <img src="/images/alegorica-logo.webp" alt="alegorica" />
          </div>
          <span className="font-playFair text-3xl/9 self-start mt-5">
            Un lienzo, al tacto de tu piel. <br />
            Piezas únicas, historias auténticas. <br />
            Sé parte del Club.
          </span>
        </div>
        <div className="h-auto w-[50vw] absolute right-0 md:translate-x-1/4 translate-x-1/3 -bottom-20">
          <img
            src="/images/hero-img.webp"
            alt="walter"
            className="h-full w-full object-cover"
          />
        </div>
      </main>
      <section className="h-full w-full row-start-2">
        <h2 className="text-3xl md:text-6xl mb-5 md:mb-10 font-playFair font-extrabold">
          nuevos
        </h2>
        <Catalogue />
      </section>
    </div>
  )
}
