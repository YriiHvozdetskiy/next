import {NextResponse} from 'next/server';
import {getMyPosts} from '@/fetch';

export async function GET() {

   try {
      const data = await getMyPosts(`https://jsonplaceholder.typicode.com/posts?userId=2`)

      return NextResponse.json(data);
   } catch (error) {
      console.log('[MY_POST]', error);
      return new NextResponse("Internal error", {status: 500});
   }
}