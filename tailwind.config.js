/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         fontSize: {
            'desk': ['25px', {
               lineHeight: '30px',
            }],
            'mobile': ['15px', {
               lineHeight: '18px',
            }],
         },
      },
   },
   plugins: [],
}

// sm	640px	@media (min-width: 640px)
// md	768px	@media (min-width: 768px)
// lg	1024px @media (min-width: 1024px)
// xl	1280px @media (min-width: 1280px)
// 2xl 1536px @media (min-width: 1536px)