import {useEffect, useState} from 'react';

export const useGetStore = (store, callback) => {
   const result = store(callback)

   const [state, setState] = useState()

   useEffect(() => {
      setState(result)
   }, [result]);

   return state
}