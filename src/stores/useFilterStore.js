import {create} from 'zustand';

export const useFilterStore = create(set => ({
   filter: 'all',
   setFilter: (value) => set({ filter: value })
}))