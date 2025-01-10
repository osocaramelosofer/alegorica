import { cn } from '@/lib/utils/utils'

interface NavbarProps {
  className: string
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <nav className={cn('', className)}>
      <ul className="flex gap-x-2 md:gap-x-10 md:text-2xl text-sm items-center font-playFair">
        <li>alegórica</li>
        <li>nuevos</li>
        <li>acerca</li>
        <li>contacto</li>
        <li>sociales</li>
      </ul>
    </nav>
  )
}
