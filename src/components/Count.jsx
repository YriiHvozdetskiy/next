import {shallow} from 'zustand/shallow';
import {useGetStore} from '@/hooks';
import {useCounter} from '@/store';

// https://youtu.be/E0fp2KUWRtQ?list=PLghXKtwd8hBUWmvfi3JeN7gGvgWFu8t7q

const Count = () => {
   //TODO щоб записувати/читати дані в sessionStorage,localStorage і не було помилки при запису/читані даних,
   // використовуєм useEffect - щоб компонента відображалася на сервері (даже коли в неї 'use client')

   // const [countState, setCountState] = useState();
   // const [count, increaseCount] = useCounter(
   //    state => [state.count, state.increaseCount],
   //    shallow
   // )
   //
   // useEffect(() => {
   //    setCountState(count)
   // }, [count]);

   //or
   const [increaseCount, decreaseCount] = useCounter(state => [
         state.increaseCount,
         state.decreaseCount
      ],
      shallow
   )

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