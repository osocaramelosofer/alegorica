import { cn } from '@/lib/utils/utils'
import { SpinningText } from '../ui/spinning-text'
import Image from 'next/image'

interface FooterProps {
  className: string
}
export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        'flex row-start-5 h-full gap-6 flex-wrap items-center justify-center',
        className
      )}
    >
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
  )
}
