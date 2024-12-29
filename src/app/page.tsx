import { SpinningText } from "@/components/ui/spinning-text";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_500px_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <nav>
        <ul className="flex gap-x-5 items-center">
          <li>
            <span className="font-chomsky text-2xl font-normal">Alegorica</span>
          </li>
          <li>tienda</li>
          <li>colecciones</li>
        </ul>
      </nav>
      <main className="relative flex flex-col row-start-2 items-center sm:items-start w-full h-full">
        {/* <div className="absolute inset-0 bg-black ">
        </div> */}
      
          <div className="flex w-full h-full items-center ">
            <span className="leading-tight font-chomsky text-[30vw] font-normal tracking-tighter pointer-events-none" aria-hidden>alegórica</span>
          </div>
          <span className="md:ml-10 font-playFair text-black font-extrabold text-xl md:text-4xl italic" >Sé parte del club</span>
      </main>
      <section>
        <h2 className="font-times text-6xl">Prendas</h2>
      </section>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
      <div className="mr-10">
              <SpinningText
                  radius={4.5}
                  fontSize={.8}
                  className='font-medium leading-none tracking-widest'
                >
              {`alegorica • alegorica • `}
              </SpinningText>  
            </div>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Discover
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Collection
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
          About us →
        </a>
      </footer>
    </div>
  );
}
