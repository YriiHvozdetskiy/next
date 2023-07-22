import {useEffect, useState} from 'react';

// TODO для zustand + localStore
export const useGetStore = (store, callback) => {
   const result = store(callback)

   const [state, setState] = useState(null)

   useEffect(() => {
      setState(result)
   }, [result]);

   return state
}