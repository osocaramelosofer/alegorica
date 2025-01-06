import Catalogue from '@/components/products/catalogue'

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_auto] gap-20 md:gap-28">
      <main className="row-start-1 relative flex flex-col items-center sm:items-start w-full h-full">
        <div className="flex flex-col  items-center ">
          <span
            className="leading-tight font-chomsky text-[30vw] font-normal tracking-tight pointer-events-none select-none"
            aria-hidden
          >
            alegórica
          </span>
          <span className="md:ml-10 mr-2 md:mr-0 font-playFair text-black font-extrabold text-2xl md:text-4xl italic">
            Sé parte del club
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
        <h2 className="text-3xl md:text-6xl text-center mb-5 md:mb-10 font-times ">
          Prendas
        </h2>
        <Catalogue />
      </section>
    </div>
  )
}
