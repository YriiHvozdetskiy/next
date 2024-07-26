'use client';

import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';

const WP_BASE_URL = 'https://wp.sciepro.sheep.fish/wp-admin/admin-ajax.php';

// async function getPosts() {
//    const url = new URL(WP_BASE_URL);
//    url.searchParams.append('action', 'get_blog');
//    url.searchParams.append('lang', 'en');
//    url.searchParams.append('paged', '1');
//
//    try {
//       const response = await fetch(url);
//
//       if (!response.ok) {
//          notFound();
//       }
//
//       const data = await response.json();
//       return data.data.posts;
//    } catch (error) {
//       console.error('Error fetching posts:', error);
//       throw error;
//    }
// }

async function getPosts() {
   const response = await axios.get(WP_BASE_URL, {
      params: {
         action: 'get_blog',
         lang: 'en',
         paged: 1,
      },
   });
   return response.data.data.posts;
}

export default function Post() {
   const {
      data: listPost,
      isLoading,
      error,
   } = useQuery({
      queryKey: ['posts'],
      queryFn: getPosts,
      staleTime: 1000 * 60 // 1 minute - не відбувається запит відразу на клієнті
   });

   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>Error: {error.message}</div>;

   return (
      <div>
         <h1>Posts</h1>
         <ul
            className={
               'flex flex-col gap-[1rem] sm:gap-y-[3rem] sm:gap-x-[4rem] sm:flex-row flex-wrap'
            }
         >
            {listPost?.map((item, index) => (
               <li
                  className={'sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2.7rem)]'}
                  key={index}
               >
                  <div className={'relative'}>
                     {item?.category?.toLowerCase() && (
                        <span
                           className={
                              'absolute top-[1rem] left-[1rem] text-[1.4rem] font-medium leading-[2.1rem] capitalize text-light px-[1rem] py-[0.8rem] bg-[#01010166]'
                           }
                        >
                           {item?.category}
                        </span>
                     )}
                     <Image
                        className={'max-h-[30rem] min-h-[30rem] w-full object-cover'}
                        src={item?.image || ''}
                        alt={'post preview'}
                        width={500}
                        height={300}
                     />
                  </div>
                  <div className={'flex flex-col p-[1rem] pb-[2rem] sm:px-[2rem]'}>
                     <span
                        className={
                           'text-[1.3rem] sm:text-[1.5rem] font-medium leading-[1.6rem] sm:leading-[1.8rem] mb-[1.3rem] text-[#A4B0BE]'
                        }
                     >
                        {item?.date}
                     </span>
                     <div className={'flex justify-between items-center gap-[2rem]'}>
                        <p
                           className={
                              'text-[1.4rem] sm:text-[1.6rem] font-medium leading-[1.71rem] sm:leading-[2rem]'
                           }
                        >
                           {item?.title}
                        </p>
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
}
