import {useQuery} from '@tanstack/react-query';

const mockTodos = [
   {id: 1, text: "Buy groceries", completed: false},
   {id: 2, text: "Do laundry", completed: true},
   {id: 3, text: "Walk the dog", completed: false}
];

async function fetchTodos(filter, sortBy) {
   // Simulate API request delay
   await new Promise((resolve) => setTimeout(resolve, 1000));

   let filteredTodos = mockTodos;

   // Apply filtering if provided
   if (filter?.completed !== true) {
      filteredTodos = mockTodos.filter((todo) => !todo.completed);
   }

// Apply sorting if provided
   if (sortBy) {
      filteredTodos.sort((a, b) => {
         if (a[sortBy] < b[sortBy]) return -1;
         if (a[sortBy] > b[sortBy]) return 1;
         return 0;
      });
   }

   return filteredTodos;
}

export const useFetchTodos = ({filter, sortBy}) => {
   return useQuery(
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
         // ...options
      }
   );
}