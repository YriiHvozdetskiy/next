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

export const useCounter = create(
   persist((set) => ({
         count: 0,
         increaseCount: (value) => set((state) => ({count: state.count + value})),
         decreaseCount: (value) => set((state) => ({count: state.count - value}))
      }),
      {
         name: 'counter',
         // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      }
   ))

// const useBoundStore = create((set) => ({
//    storeSliceA: ...,
//    storeSliceB: ...,
//    storeSliceC: ...,
//    updateX: () => set(...),
//    updateY: () => set(...),
// }))
