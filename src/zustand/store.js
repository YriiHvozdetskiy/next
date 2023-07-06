import {create} from 'zustand';
import {persist, devtools, subscribeWithSelector} from 'zustand/middleware'

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

export const useCounter = create(
   devtools(persist((set) => ({
         count: 0,
         increaseCount: (value) => set((state) => ({count: state.count + value}))
      }),
      {
         name: 'counter'
      }
   )))

// const useBoundStore = create((set) => ({
//    storeSliceA: ...,
//    storeSliceB: ...,
//    storeSliceC: ...,
//    updateX: () => set(...),
//    updateY: () => set(...),
// }))
