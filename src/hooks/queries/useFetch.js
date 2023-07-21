import {useQuery} from '@tanstack/react-query';

export const useFetchTodos = ({filter, sortBy}) =>
   useQuery(
      [
         "todos",
         "list",
         {
            filter,
            sortBy
         }
      ],
      () => fetchTodos(filter, sortBy),
      {
         staleTime: 5000,
         ...options
      }
   );
