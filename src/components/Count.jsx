import {useCounter} from '@/zustand/store';

const Count = () => {
   const {count, increaseCount} = useCounter()
   // const count  = useCounter(state=> state.count) // так ніби краще, вся приложуха не ререндириться?(перевірити)

   console.log('count', count)
   return (
      <>
         <div>{count}</div>
         <button className={'border border-solid border-amber-300 rounded-lg p-1'}
                 onClick={() => increaseCount(1)}>increase
         </button>
      </>
   );
};

export default Count