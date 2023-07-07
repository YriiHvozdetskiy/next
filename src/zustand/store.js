import {create} from 'zustand';
import {persist, devtools, subscribeWithSelector, createJSONStorage} from 'zustand/middleware'

const store = (set) => ({
   tasks: [
      {
         title: 'TestTask',
         state: 'Planned',
      },
   ],
   addTask: (title, state) => set(store => ({tasks: [...store.tasks, {title, state}]}))
})

export const useStore = create(store)



// const useBoundStore = create((set) => ({
//    storeSliceA: ...,
//    storeSliceB: ...,
//    storeSliceC: ...,
//    updateX: () => set(...),
//    updateY: () => set(...),
// }))
