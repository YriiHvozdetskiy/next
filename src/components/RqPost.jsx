'use client'

import {useQuery} from '@tanstack/react-query';
import {getPost, getUser} from '@/fetch';

export const RqPost = ({id}) => {
   const postQuery = useQuery({
      queryKey: ['posts', id],
      queryFn: () => getPost(id)
   })


   const userQuery = useQuery({
      queryKey: ["users", postQuery?.data?.userId],
      enabled: postQuery?.data?.userId != null,
      queryFn: () => getUser(postQuery.data.userId),
   })

   return (
      <>
         <h1>
            {/*{postQuery?.data?.title} <br />*/}
            <small>
               {userQuery.isLoading
                  ? "Loading User..."
                  : userQuery.isError
                     ? "Error Loading User"
                     : userQuery.data.name}
            </small>
         </h1>
         {/*<p>{postQuery.data.body}</p>*/}
      </>
   );
};