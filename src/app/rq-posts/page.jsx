'use client';

import PostsList1 from '@/components/PostList1';
import {RqPost} from '@/components/RqPost';
import {CreatePost} from '@/components/CreatePost';

const RQPostsPage = () => {

   return (
      <>
         <PostsList1/>
         <RqPost id={1}/>
         <CreatePost/>
      </>
   )
}
export default RQPostsPage;