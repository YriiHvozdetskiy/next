import {Task} from '@/components/Task';
import {useStore} from '@/zustand/store';

export const Column = ({state}) => {
   const tasks = useStore(
      store => store.tasks.filter(task => task.state === state)
   )

   return (
      <div className={'max-w-[20rem] w-1/3 px-3 rounded-md py-2 bg-gray-950 text-white min-h-[20rem]'}
      >
         <p>{state}</p>
         {tasks.map((task, index) => (
            <Task title={task.title} key={index}/>
         ))}
      </div>
   );
};