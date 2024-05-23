'use client';

import {useQuery} from '@tanstack/react-query';

import {getMyPosts} from '@/fetch';
import {usePostsQuery} from '@/hooks/queries';

export const TestUseQuery = () => {
   // отримуємо дані де потрібно з одним запитом на сервер, дані беруться з кешу за "ключем"
   // використовуємо кастомний хук в якому буде useQuery
   // тут немає повторного запиту
   const {data} = useQuery(['MyPosts'], () => getMyPosts);

   // тут є повторний запит в usePostsQuery томущо queryKey НЕ ОДНАКОВІ:
   // ["MyPosts", null/11] - в TestUseQuery
   // ["MyPosts"] - в MyPosts (і вище)
   const posts = usePostsQuery('MyPosts', 11);
   console.log('posts TestUseQuery', posts.data);

   return (
      <>
         <p className={'text-secondary text-lg my-6'}>TestUseQuery</p>
         {data &&
        data?.map((post) => (
           <div key={post.title}>
              <span>title: {post?.title}</span>
              <br />
              <span>body: {post?.body}</span>
           </div>
        ))}
      </>
   );
};
