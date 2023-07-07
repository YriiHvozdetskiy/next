import '@/styles/globals.css'
import {Inter, Montserrat, Days_One} from 'next/font/google'
import {Providers} from '@/utils';

const inter = Inter({
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-inter',
})

const montserrat = Montserrat({
   subsets: ['latin'],
   display: 'swap',
   weight: ['500', '600', '700'],
   variable: '--font-montserrat',
});

const daysOne = Days_One({
   subsets: ['latin'],
   display: 'swap',
   weight: ['400'],
   variable: '--font-days-one',
});

export const metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
}

export default function RootLayout({children}) {
   return (
      <html lang="en" className={'h-full'}>
      <Providers>
         <body
            className={`${inter.variable} ${montserrat.variable} ${daysOne.variable} font-sans  flex flex-col h-full`}>
         {children}
         </body>
      </Providers>
      </html>
   )
}
