'use client';

import {useFilter, useTodos} from '@/stores';
import {Checkbox} from '@/components/ui/Checkbox';

const Todo = ({id, title}) => {
   const [toggleTodo] = useTodos(state => [state.toggleTodo]);

   return (
      <div className={'flex items-center space-x-2'}>
         <Checkbox id={id} onChange={() => toggleTodo(id)}/>
         <label htmlFor={id}>{title}</label>
      </div>
   );
};

export const ZustandTodoList = () => {
   const [filter] = useFilter(state => [state.filter]);
   const todos = useTodos(state => {

      switch (filter) {
         case 'completed':
            return state.todos.filter((todo) => todo.completed);
         case 'uncompleted':
            return state.todos.filter((todo) => !todo.completed);
         default:
            return state.todos;
      }
   });

   return (
      <>
         {todos.map((todo) => (
            <Todo key={todo.id} {...todo} />
         ))}
      </>
   );
};