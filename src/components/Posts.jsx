import {usePosts} from '@/zustand/store';
import {useMutation, useQuery} from '@tanstack/react-query';
import axios from 'axios';

export const Posts = () => {

   const {setIsLoading} = usePosts()

   // const {} = usePost(1,'post')

   const {data} = useQuery({
      queryKey: ['post'],
      queryFn: async () => {
         setIsLoading(true)
         const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`)

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

   // const {data, isLoading} = useMutation({
   //
   //    mutationFn: async () => {
   //       const {data} = await axios.post('https://jsonplaceholder.typicode.com', {myval: 'post'})
   //       return data
   //    }
   // })

   return (
      <div>
         {JSON.stringify(data)}
      </div>
   );
};