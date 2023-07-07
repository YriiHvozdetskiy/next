import {create} from 'zustand';
import {persist} from 'zustand/middleware';

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