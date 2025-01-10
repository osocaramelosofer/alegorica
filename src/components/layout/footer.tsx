/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils/utils'

interface FooterProps {
  className: string
}
export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn(' row-start-5 h-full gap-6 w-full ', className)}>
      <div className="flex justify-between h-full">
        <div className="h-32 self-end">
          <img
            className="w-full h-full object-cover"
            src="/images/enamorados-encuerados-logo.webp"
            alt="enamorados encuerados logo"
          />
        </div>

        {/* <div className="">
          <ul className="flex flex-col">
            <li>
              <a
                className="font-playFair text-xl font-semibold flex items-center gap-2 hover:underline hover:underline-offset-4"
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
                Siguenos
              </a>
            </li>
            <li>
              <a
                className="font-playFair text-xl font-semibold flex items-center gap-2 hover:underline hover:underline-offset-4"
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
                Siguenos
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </footer>
  )
}
