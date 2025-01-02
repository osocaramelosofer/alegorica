import { Playfair_Display } from 'next/font/google'

const playFairDisplay = Playfair_Display({
  variable: '--font-play-fair-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['italic', 'normal']
})

export { playFairDisplay }
