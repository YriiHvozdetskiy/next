import create from 'zustand';

export const useFilter = create(set => ({
   filter: 'all',
   setFilter: (value) => set({ filter: value })
}))