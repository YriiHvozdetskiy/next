import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const Card = () => {

   // const {data} = useQuery({
   //    queryKey: ['CardPosts'], // якщо ми будем використовувати useQuery ще десь НА ТІЙ САМІЙ СТОРІНЦІ будем робити fetch, то за цим ключом ['CardPosts'], useQuery візьме дані з кешу і не буде робити ще один fetch
   //    queryFn: async () => {
   //       const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
   //
   //       return data
   //    },
   // })

   return (
      <div className={'mt-5'}>
         <p>Card</p>
         {/*<p>{JSON.stringify(data)}</p>*/}
      </div>
   );
};

export default Card