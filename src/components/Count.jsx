import {useCounter} from '@/zustand/store';
import {shallow} from 'zustand/shallow';
import {useGetStore} from '@/hooks';

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
      <>
         <div>{count ? count : 0}</div>
         <button className={'border border-solid border-amber-300 rounded-lg p-1'}
                 onClick={() => increaseCount(1)}>increase
         </button>
         <button className={'border border-solid border-amber-300 rounded-lg p-1'}
                 onClick={() => decreaseCount(1)}>decrease
         </button>
      </>
   );
};

export default Count