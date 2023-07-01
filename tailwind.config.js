/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   mode: 'jit',

   theme: {
      // якщо значення ТУТ то вони дифолтні і значення з tailwind не зможем застосовувати
      // fontSize: {
      //    'desk': ['25px', {
      //       lineHeight: '30px',
      //    }],
      //    'mobile': ['15px', {
      //       lineHeight: '18px',
      //    }],
      // },
      // colors: {
      //    'primary': '#4d23a4',
      //    'secondary': 'green'
      // },

      // якщо значення ТУТ то зможем застосовувати знаяення з TAILWIND & КАСТОМНІ
      extend: {
         fontSize: {
            'desk': ['25px', {
               lineHeight: '30px',
            }],
            'mobile': ['15px', {
               lineHeight: '18px',
            }],
         },
         colors: {
            primary: '#4d23a4',
            secondary: 'green',
         },
         fontFamily: {
            main: ['var(--font-montserrat)'],
            secondary: ['var(--font-inter)'],
            days: ['var(--font-days-one)'],
         }
      },
   },
   plugins: [],
}

// TODO custom values
//top-[-23px]
//w-[50%]

// TODO calc
//w-[calc(100%/2)] - писати без пробілів

// TODO not(:last-child)
//[&>*:not(:last-child)]:властивість - ЗАДАЄТЬСЯ БАТЬКУ

//TODO :not(тег)
//[&>*:not(p)]:властивість - ЗАДАЄТЬСЯ БАТЬКУ для ТЕГІВ

// sm	640px	@media (min-width: 640px)
// md	768px	@media (min-width: 768px)
// lg	1024px @media (min-width: 1024px)
// xl	1280px @media (min-width: 1280px)
// 2xl 1536px @media (min-width: 1536px)
