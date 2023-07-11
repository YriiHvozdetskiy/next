'use client'

import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import axios from 'axios';
import {usePosts} from '@/store';
import {Card} from '@/components/Card';
import {wait} from '@/utils';

export const Posts = () => {
   const queryClient = useQueryClient()
   const {setIsLoading} = usePosts()

   // const {} = usePost(1,'post')
   //TODO з useQuery можна не використовувати useEffect для запиту при монтувані і useState для запису даних в стейт, дані будуть в "data" і кожний раз актуальні(коли з вкаладки пропаде фокус і тд)
   const {data} = useQuery({
      queryKey: ['posts'], // якщо ми будем використовувати useQuery ще десь НА ТІЙ САМІЙ СТОРІНЦІ будем робити fetch, то за цим ключом ['posts'], useQuery візьме дані з кешу і не буде робити ще один fetch
      queryFn: async (obj) => {
         console.log('obj', obj)
         setIsLoading(true)
         const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=2`)

         return data
      },
      onSuccess: (data) => {
      },
      onError: () => {
      },
      //like a finally
      onSettled: () => {
         setIsLoading(false)
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
         queryClient.invalidateQueries(['posts']) // після успішної зміни даних (addPost), оновлюєм на клієнті їх через ключ ['posts']
      }
   })

   return (
      <div>
         <p>{JSON.stringify(data)}</p>
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