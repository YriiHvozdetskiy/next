'use client'

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {navLinks} from '@/utils';

export const Navigation = () => {
   const currentRoute = usePathname()

   return (
      <nav>
         <ul className={'flex space-x-3 justify-center'}>
            {navLinks.map((link) => {
               const isCurrent = currentRoute === link.href

               return (
                  <li key={link.name}>
                     <Link
                        className={`${isCurrent ? 'text-sky-600 border-sky-600' : 'text-black border-black'} hover:text-sky-600 px-6 inline-block py-3 border-2 border-solid rounded-lg`}
                        href={link.href}
                     >
                        {link.name}
                     </Link>
                  </li>
               )
            })}
         </ul>
      </nav>
   );
};