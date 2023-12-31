'use client'

import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import axios from 'axios';

import {usePostsStore} from '@/stores';
import Card from '@/components/Card';
import {wait} from '@/utils';
import {getMyPosts} from '@/fetch';
import {useGetStore} from '@/hooks';
import {Button} from '@/components/Button';
import {getPosts} from '@/hooks/queries';

export const MyPosts = () => {
   const queryClient = useQueryClient()
   const [setIsLoading, pushPost] = usePostsStore(state => [
      state.setIsLoading,
      state.pushPost
   ])

   const posts = useGetStore(usePostsStore, state => state.posts)
   console.log('posts MyPosts', posts)

   //TODO з useQuery можна не використовувати useEffect для запиту при монтувані і useState для запису даних в стейт, дані будуть в "data" і кожний раз актуальні(коли з вкаладки пропаде фокус і тд)
   const {data} = useQuery({
      queryKey: ['MyPosts'], // якщо ми будем використовувати useQuery ще десь НА ТІЙ САМІЙ СТОРІНЦІ будем робити fetch, то за цим ключом ['MyPosts'], useQuery візьме дані з кешу і не буде робити ще один fetch

      // при пагінації зберігає старі дані поки не прийдуть нові дані з сервера
      // keepPreviousData: true,

      // скорочення
      queryFn: getMyPosts,

      // з api/route
      // queryFn: () => getMyPosts('api/my-posts'),

      // queryFn: async (obj) => {
      //    console.log('queryFn arg', obj)
      //    setIsLoading(true)
      //    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=2`)
      //
      //    return data
      // },
      onSuccess: (data) => {
         // записуєм дані в zustand (не потрібно див замітки в README)
         pushPost(data)
      },
      onError: () => {
      },
      //like a finally
      onSettled: () => {
         // setIsLoading(false)
      },
   })

   const {mutate: addPost, isLoading} = useMutation({

      mutationFn: async () => {
         // await wait(1000)
         const {data} = await axios.post('https://jsonplaceholder.typicode.com/posts/2',
            JSON.stringify({
               title: 'my post',
               body: 'body post',
               userId: 2
            }))

         return data
      },
      onSuccess: () => {
         queryClient.invalidateQueries(['MyPosts']) // після успішної зміни даних (addPost), оновлюєм на клієнті їх через ключ ['MyPosts']
      }
   })

   return (
      <div>
         <Button onClick={() => usePostsStore.persist.clearStorage()}>
            clear localStore
         </Button>
         {data && data?.map(post => (
            <div key={post.title}>
               <span>title: {post?.title}</span>
               <br/>
               <span>body: {post?.body}</span>
            </div>
         ))}
         {/*<p>{JSON.stringify(data)}</p>*/}
         <button
            onClick={() => {
               addPost()
            }}
            className={'mt-4'}
         >
            Add New Post
         </button>
         <hr/>
         <Card/>
      </div>
   );
};