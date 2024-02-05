/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: ["class"],
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
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

      // screens: {
      //    'tablet': '640px',
      //    // => @media (min-width: 640px) { ... }
      //
      //    'laptop': '1024px',
      //    // => @media (min-width: 1024px) { ... }
      //
      //    'desktop': '1280px',
      //    // => @media (min-width: 1280px) { ... }
      // },
      // colors: {
      //    primary: '#4d23a4',
      //    secondary: 'green',
      // },

      // якщо значення ТУТ то зможем застосовувати знаяення з TAILWIND & КАСТОМНІ
      extend: {
         // TODO завжди центруємо клас "container" (width: 100%; margin-right: auto; margin-left: auto;) і автоматом дод @media max-width: 1024px; і тд
         container: {
            center: true,
         },
         fontSize: {
            'desk': ['25px', {
               lineHeight: '30px',
            }],
            'mobile': ['15px', {
               lineHeight: '18px',
            }],
         },
         // colors: {
         //    primary: '#4d23a4',
         //    secondary: 'green',
         // },
         fontFamily: {
            main: ['var(--font-montserrat)'],
            secondary: ['var(--font-inter)'],
            days: ['var(--font-days-one)'],
         },
         colors: {
            primary: '#4d23a4',
            secondary: 'green',
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            // primary: {
            //    DEFAULT: "hsl(var(--primary))",
            //    foreground: "hsl(var(--primary-foreground))",
            // },
            // secondary: {
            //    DEFAULT: "hsl(var(--secondary))",
            //    foreground: "hsl(var(--secondary-foreground))",
            // },
            destructive: {
               DEFAULT: "hsl(var(--destructive))",
               foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
               DEFAULT: "hsl(var(--muted))",
               foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
               DEFAULT: "hsl(var(--accent))",
               foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
               DEFAULT: "hsl(var(--popover))",
               foreground: "hsl(var(--popover-foreground))",
            },
            card: {
               DEFAULT: "hsl(var(--card))",
               foreground: "hsl(var(--card-foreground))",
            },
         },
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
         },
         keyframes: {
            "accordion-down": {
               from: {height: 0},
               to: {height: "var(--radix-accordion-content-height)"},
            },
            "accordion-up": {
               from: {height: "var(--radix-accordion-content-height)"},
               to: {height: 0},
            },
         },
         animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
         },
      },
   },
   plugins: [require("tailwindcss-animate")],
}

//TODO прозорий border
//border border-primary border-opacity-0

//TODO Background Image
//bg-[url('https://cdn.pixabay.com/photo/2023/06/23/19/34/campfire-8084064_1280.jpg')]

//TODO custom bg

// tailwind.config.js
// backgroundImage: {
//    'auth': "url('../assets/images/auth-bg.jpg')",
// },
// bg-auth

//TODO  background: rgba(1, 1, 1, 0.40); == bg-[#010101] bg-opacity-40

// TODO тернарник
// className={`${isChecked ? 'bg-primary' : 'bg-light'} w-[2.5rem] h-[2.5rem]`}


//TODO GRID

//TODO grid-rows кастомні
//https://tailwindcss.com/docs/grid-template-rows#arbitrary-values
// grid-rows-[200px_minmax(900px,_1fr)_100px]
//grid-rows-[22rem_22rem] - буде два рядки, можна робити довільну к-ть за допомогою "_" див.доку
// .collage-rows {
//    grid-template-rows: repeat(6, 22rem);
// }

//TODO grid-cols кастомні
//grid-cols-1 md:grid-cols-[minmax(20rem,40rem)_minmax(40rem,_1fr)] - буде 2 колонки:
// 1 колонка - minmax(20rem,40rem) - мінімальна ширина 20rem, максимальна 40rem
// 2 колонка - minmax(40rem,_1fr) - мінімальна ширина 40rem, максимальна 1fr

// grid-template-rows: repeat(6, 22rem); - перші будуть висотою 22rem
// auto-rows-[22rem] = grid-auto-rows: 22rem; починаючи з 7 рядка будуть по 22rem і до безкінечності

// TODO cn() - тепер можем міняти стилі
// тернарник в кінці ф-ції ${formProps?.errors?.[name] ? 'focus-visible:bg-[#FEF6F5] focus-visible:border-error' : ''}

// при визові
// <Header
//    className={'bg-violet-200'} // додаткова стилізація через className (потірбно додати ф-цію 'cn')
// />
// в компоненті є стандартні стилі і яерез className передажєм додаткові
// <header className={cn('container mb-8 py-2', className)}>

// TODO data-state="active"
//data-[state="active"]:text-accent - стилізація дата атрибутів

// TODO custom values
//top-[-23px]
//w-[50%]

//TODO [&[data-state=open]>svg]:rotate-180

// TODO calc
//w-[calc(100%/2)] - писати без пробілів

// TODO not(:last-child) [&]
//[&>*:not(:last-child)]:властивість - //TODO ЗАДАЄТЬСЯ БАТЬКУ

//TODO :not(тег)
//[&>*:not(p)]:властивість - ЗАДАЄТЬСЯ БАТЬКУ для ТЕГІВ

//TODO space-x
//space-x-[10px] - заміна gap для flex, задає відступи для дітей(х- зліва) всім крім першого (херово працює з flex-wrap). space-y-2(дял col)

//TODO max-* sm, md, lg etc - стилі будуть примінятися ДО відповідного @media
//@media screen and (max-width)
// max-xl:bg-gray-300 max-w-[1430px]

// min-[320px]:text-center


// sm	640px	@media (min-width: 640px)
// md	768px	@media (min-width: 768px)
// lg	1024px @media (min-width: 1024px)
// xl	1280px @media (min-width: 1280px)
// 2xl 1536px @media (min-width: 1536px)
