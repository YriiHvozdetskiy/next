import {useStore} from '@/zustand/store';
import {useMemo} from 'react';
import {shallow} from 'zustand/shallow';

export const selectTasks = ({state}) => {
   // v1
   // const tasks = useStore(stores => stores.tasks)

   // const filtered = useMemo(
   //    () => tasks.filter(task => task.state === state),
   //    [tasks, state]
   // )

   // v2
   const tasks = useStore(
      store => store.tasks.filter(task => task.state === state),
      shallow
   )
}
//doc
const Component = () => {
   const count = useCountStore((state) => state.count)
   const increment = useCountStore((state) => state.increment)
   const decrement = useCountStore((state) => state.decrement)
   // ...
}
