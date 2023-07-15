'use client';

import {useQuery, useQueryClient} from "@tanstack/react-query"
import toast from 'react-hot-toast';

import {getPost, getPosts} from '@/fetch';
// https://youtu.be/r8Dg0KVnfMA

export default function PostsList1() {
   const queryClient = useQueryClient()
   const postsQuery = useQuery({
      queryKey: ["posts"],
      queryFn: getPosts,
      // staleTime: 3000, // індивідуальний час зберігання кешу, після якого буде виконаний запит ПІСЛЯ ВТРАТИ ФОКУСУ З ВКЛАДКИ, СТОРІНКИ
      // refetchInterval: 2000, // запит за новими даними буде відбуватися кожні 2сек
      placeholderData: [{id: 1, title: "Initial Data"}],
      initialData: [{id: 1, title: 'initial data'}] // дані які показуються поки не завантажились дані з сервера
   })

   //postsQuery.fetchStatus === 'fetching'
   //postsQuery.fetchStatus === 'idle'
   //postsQuery.fetchStatus === 'paused' // коли відключився інтернет

   // TODO робим запит коли тільки навели мишку на кнопку "загрузити ще"
   const onHoverPostOneLink = () => {
      queryClient.prefetchQuery({
         queryKey: ["posts", 1],
         queryFn: () => getPost(1),
      })
   }

   const notify = () => toast('Here is your toast.');

   return (
      <div>
         <h1 className={'mb-6'}>Posts List 1</h1>
         <ol className={'space-y-4 [&>*]:border-b-2 [&>*]:border-amber-300 [&>*]:border-solid'}>
            {postsQuery?.data?.map(post => (
               <li key={post.id}>title: {post.title}</li>
            ))}
         </ol>
         <button onClick={notify}>click</button>
         <br/>
         <button onMouseEnter={onHoverPostOneLink}>Load More</button>
      </div>
   )
}