import { Gabarito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'CUY ANIMELIST',
  description: 'Website Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark `} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
