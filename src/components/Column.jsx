import {Task} from '@/components/Task';
import {useStore} from '@/zustand/store';
import {useRef, useState} from 'react';
import {shallow} from 'zustand/shallow';

export const Column = ({state}) => {
   const [text, setText] = useState('');
   const [open, setOpen] = useState(false);
   const input = useRef(null);

   const tasks = useStore(
      store => store.tasks.filter(task => task.state === state)
   )

   const addTask = useStore(store => store.addTask)

   // or
   // const [tasks, addTask] = useStore(
   //    (store) => [store.tasks.filter(task => task.state === state), store.addTask],
   //    shallow
   // )

   const openModalHandler = () => {
      setOpen(true)
      // input.current.focus()
      // TODO не працює ref
      console.log('input.current', input.current)
   };

   return (
      <div className={'max-w-[20rem] w-1/3 px-3 rounded-md py-2 bg-gray-950 text-white min-h-[20rem] space-y-2'}
      >
         <div className={'flex justify-between'}>
            <p>{state}</p>
            <button
               type={'button'}
               className={'text-black bg-white p-1 rounded-sm'}
               onClick={openModalHandler}
            >
               Add
            </button>
         </div>
         {tasks.map((task, index) => (
            <Task title={task.title} key={index}/>
         ))}
         {/*TODO background - для модалки*/}
         {open &&
            <div className={'absolute bg-black bg-opacity-30 w-full h-full top-0 left-0'}>
               <div
                  className={'p-12 flex flex-col items-center space-y-2 bg-white absolute z-[1] transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'}>
                  <input
                     className={'text-black border-solid border-cyan-600 border rounded-sm'}
                     type="text"
                     onChange={e => setText(e.target.value)}
                     value={text}
                     ref={input}
                  />
                  <button
                     className={'text-black'}
                     onClick={() => {
                        addTask(text, state)
                        setText('')
                        setOpen(false)
                     }}
                  >
                     Submit
                  </button>
               </div>
            </div>
         }
      </div>
   );
};