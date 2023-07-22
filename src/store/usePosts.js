import {create} from 'zustand';
import {persist} from 'zustand/middleware';

export const usePosts = create(
   persist(set => ({
         posts: [],
         isLoading: false,
         setIsLoading: (isLoading) => set({isLoading}),
         pushPost: (posts) => set({posts: posts})
      }),
      {
         name: 'posts',
         // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      }
   )
)
