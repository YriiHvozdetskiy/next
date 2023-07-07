import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

export const usePost = (id, key) => {
   return useQuery({
      queryKey: [key],
      queryFn: async () => {
         const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

         return data
      },
      onSuccess: (data) => {

      },
      onError: () => {

      }
   })
}