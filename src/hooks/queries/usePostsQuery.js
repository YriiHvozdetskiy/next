import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

export const getPosts = async (postId) => {
   //якщо передали postId то робем запит за конкретним постом,
   //якщо не передали - отримуємо всі пости
   const {data} = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=2${postId ? `&id=${postId}` : ''}`,
   );

   return data;
};

export const usePostsQuery = (keyName, postId) => useQuery({
   queryKey: [keyName, postId],
   queryFn: () => getPosts(postId),
});

