import {dehydrate, HydrationBoundary} from '@tanstack/react-query';
import axios from 'axios';

import Post from '@/components/Post';
import getQueryClient from '@/utils/getQueryClient';

const WP_BASE_URL = 'https://wp.sciepro.sheep.fish/wp-admin/admin-ajax.php';

// async function getPosts() {
//    const url = new URL(WP_BASE_URL);
//    url.searchParams.append('action', 'get_blog');
//    url.searchParams.append('lang', 'en');
//    url.searchParams.append('paged', '1');
//
//    try {
//       const response = await fetch(url, {
//          method: 'GET',
//          headers: {
//             'Content-Type': 'application/json',
//          },
//          credentials: 'same-origin',
//          cache: 'no-cache',
//       });
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

export default async function PostsPage() {
   // getQueryClient  - використовуєм з axios
   const queryClient = getQueryClient();

   await queryClient.prefetchQuery({
      queryKey: ['posts'],
      queryFn: getPosts,
   });

   // можана передати в initialData дані якщо не хоч юзати HydrationBoundary
   // const {data: post} = await getPosts();

   return (
      <HydrationBoundary state={dehydrate(queryClient)}>
         <Post />
      </HydrationBoundary>
   );
}
