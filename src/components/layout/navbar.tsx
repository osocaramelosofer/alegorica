import { cn } from '@/lib/utils/utils'

interface NavbarProps {
  className: string
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <nav className={cn('', className)}>
      <ul className="italic flex gap-x-2 md:gap-x-10 md:text-2xl text-sm items-center font-times uppercase leading-10">
        {/* <li className="font-chomsky text-2xl md:text-5xl font-normal normal-case">
          Alegórica
        </li> */}
        <li>tienda</li>
        <li>nosotros</li>
        <li>galería</li>
      </ul>
    </nav>
  )
}
