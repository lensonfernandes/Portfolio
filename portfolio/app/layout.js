import './globals.css'
// import { Inter } from 'next/font/google'


// const inter = Inter({ subsets: ['latin'] })

import { Inter, Roboto_Mono, Poppins, Playfair_Display, Nunito, Montserrat } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    }
)
//👇 Import Open Sans font
import { Open_Sans } from 'next/font/google'

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
    display: 'swap',
})

const nunito = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const montserrat = Montserrat({
    
      subsets: ['latin'],
    display: 'swap',
})


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" 
    //  className={openSans.className}
    // className='font-mono'
   // className={playfairDisplay.className}

    >
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
