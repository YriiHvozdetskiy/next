import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

export const useCounterStore = create(
   persist((set) => ({
         count: 0,
         size:'big', //це для прикладу якщо не хочемо записувати в localStore
         increaseCount: (value) => set((state) => ({count: state.count + value})),
         decreaseCount: (value) => set((state) => ({count: state.count - value}))
      }),
      {
         name: 'counter',
         // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used

         // якщо не хочемо записувати в localStore якесь поле з стейту
         partialize: (state) =>
            Object.fromEntries(
               Object.entries(state).filter(([key]) => !['size', /*тут через кому можна завати поля які не будуть в localStore */].includes(key))
            ),
         //or вказуєм яке конкретне поле записувати в localStore
         // partialize: (state) => ({ count: state.count }),
      }
   ))