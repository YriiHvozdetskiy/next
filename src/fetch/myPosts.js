import axios from 'axios';

export const getMyPosts = async (url) => {
   const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=2`)

   // з api/route
   // const {data} = await axios.get(url)

   return data;
}