import {useState} from 'react';

const STATUS = 'Planned'
export const Task = ({title}) => {
   const [color, setColor] = useState('green');

   const possible = ['bg-gray-400', 'bg-green-400', 'bg-red-400']

   return (
      <>
         <div
            className={'bg-white flex flex-col justify-between rounded-sm min-h-[5rem] text-black p-0.5'}
         >
            {title}
            <div className={'flex justify-between'}>
               <div></div>
               <div className={`text-sm p-1 bg-${color}-400 rounded`}>{STATUS}</div>
            </div>
         </div>
      </>
   );
};