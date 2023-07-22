import {shallow} from 'zustand/shallow';
import {useGetStore} from '@/hooks';
import {useCounter} from '@/store';
import {useEffect} from 'react';

// https://youtu.be/E0fp2KUWRtQ?list=PLghXKtwd8hBUWmvfi3JeN7gGvgWFu8t7q

const Count = () => {
   //TODO щоб записувати/читати дані в sessionStorage,localStorage і не було помилки при запису/читані даних,
   // використовуєм useEffect - щоб компонента відображалася на сервері (даже коли в неї 'use client')

   // const [countState, setCountState] = useState();
   //!! порядок тут [count, increaseCount] має відповідати цюму: state.count, state.increaseCount,
   // const [count, increaseCount] = useCounter(
   //    state => [state.count, state.increaseCount],
   //    shallow
   // )
   //
   // useEffect(() => {
   //    setCountState(count)
   // }, [count]);

   //or
   //!! порядок тут [increaseCount, decreaseCount] має відповідати цюму: state.increaseCount, state.decreaseCount
   const [increaseCount, decreaseCount] = useCounter(state => [
         state.increaseCount,
         state.decreaseCount,
      ],
      shallow
   )
   // вся логіка useEffect в useGetStore -- це щоб не було помилки при запису в localStore (hydration-error)
   // тут ми повертаємо тільки стейт(значення), методи для роботи з стейтом отримкєм див вище з useCounter
   const count = useGetStore(useCounter, state => state.count)

   return (
      <div className={'flex flex-col items-center space-y-4'}>
         <div>{count ? count : 0}</div>
         <button className={'border border-solid border-amber-300 rounded-lg p-1'}
                 onClick={() => increaseCount(1)}>increase
         </button>
         <button className={'border border-solid border-amber-300 rounded-lg p-1'}
                 onClick={() => decreaseCount(1)}>decrease
         </button>
      </div>
   );
};

export default Count