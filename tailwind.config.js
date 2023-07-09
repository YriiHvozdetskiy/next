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

// TODO custom values
//top-[-23px]
//w-[50%]

// TODO calc
//w-[calc(100%/2)] - писати без пробілів

// TODO not(:last-child)
//[&>*:not(:last-child)]:властивість - ЗАДАЄТЬСЯ БАТЬКУ

//TODO :not(тег)
//[&>*:not(p)]:властивість - ЗАДАЄТЬСЯ БАТЬКУ для ТЕГІВ

//TODO space-x
//space-x-[10px] - заміна gap для flex, задає відступи для дітей(х- зліва) всім крім першого (херово працює з flex-wrap). space-y-2(дял col)

//TODO max-* sm, md, lg etc - стилі будуть примінятися ДО відповідного @media
//@media screen and (max-width)


// sm	640px	@media (min-width: 640px)
// md	768px	@media (min-width: 768px)
// lg	1024px @media (min-width: 1024px)
// xl	1280px @media (min-width: 1280px)
// 2xl 1536px @media (min-width: 1536px)
