'use client'

import PostsList1 from '@/components/PostList1';
import {RqPost} from '@/components/RqPost';
import {CreatePost} from '@/components/CreatePost';

export default function RQPostsPage() {

   return (
      <>
         <PostsList1/>
         <RqPost id={1}/>
         <CreatePost/>
      </>
   )
}