import {Task} from '@/components/Task';

export const Column = ({state}) => {

   return (
      <div className={'max-w-[20rem] w-1/3 px-3 rounded-md py-2 bg-gray-950 text-white min-h-[20rem]'}
      >
         <p>{state}</p>
         <Task title={'TODO'}/>
      </div>
   );
};