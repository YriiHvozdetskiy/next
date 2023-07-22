'use client';

import {useQuery} from '@tanstack/react-query';

export const TestUseQuery = () => {
   // отримуємо дані де потрібно з одним запитом на сервер, дані беруться з кешу за "ключем"
   // використовуємо кастомний хук в якому буде useQuery
   const {data} = useQuery(['MyPosts'])

   return (
      <>
         <p className={'text-secondary text-lg my-6'}>TestUseQuery</p>
         {data && data?.map(post => (
            <div key={post.title}>
               <span>title: {post?.title}</span>
               <br/>
               <span>body: {post?.body}</span>
            </div>
         ))}
      </>
   );
};