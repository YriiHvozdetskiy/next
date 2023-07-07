import {create} from 'zustand';
import {persist} from 'zustand/middleware';

export const usePosts = create(
   persist(set => ({
         posts: [],
         isLoading: false,
         setIsLoading: (isLoading) => set({isLoading})
      }),
      {
         name: 'posts',
         // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      }
   )
)
