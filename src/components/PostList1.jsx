'use client';

import {useQuery} from "@tanstack/react-query"
import {getPosts} from '@/server-api';

export default function PostsList1() {
   const postsQuery = useQuery({
      queryKey: ["posts"],
      queryFn: getPosts,
      placeholderData: [{id: 1, title: "Initial Data"}],
   })

   // if (postsQuery.status === "loading") return <h1>Loading...</h1>
   // if (postsQuery.status === "error") {
   //    return <h1>{JSON.stringify(postsQuery.error)}</h1>
   // }

   return (
      <div>
         <h1 className={'mb-6'}>Posts List 1</h1>
         <ol className={'space-y-4 [&>*]:border-b-2 [&>*]:border-amber-300 [&>*]:border-solid'}>
            {postsQuery?.data?.map(post => (
               <li key={post.id}>{post.title}</li>
            ))}
         </ol>
      </div>
   )
}