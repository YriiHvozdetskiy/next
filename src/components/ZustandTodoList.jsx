'use client';

import {useEffect, useState} from 'react';

import {useTodosStore} from '@/stores';
import {Checkbox} from '@/components/ui/Checkbox';
import {useGetStore} from '@/hooks';

const Todo = ({id, title, completed}) => {
   const [toggleTodo] = useTodosStore(state => [state.toggleTodo]);

   return (
      <div className={'flex items-center space-x-2'}>
         <Checkbox
            id={id}
            onCheckedChange={() => toggleTodo(id)}
            checked={completed}
         />
         <label htmlFor={id}>{title}</label>
      </div>
   );
};

export const ZustandTodoList = () => {
   const todos = useGetStore(useTodosStore, state => state.todos)

   // TODO альтернатива useGetStore
   // const [isMounted, setIsMounted] = useState(false);
   //
   // useEffect(() => {
   //    setIsMounted(true);
   // }, []);
   //
   // if (!isMounted) {
   //    return null;
   // }

   return (
      <>
         {todos?.map((todo) => (
            <Todo key={todo.id} {...todo} />
         ))}
      </>
   );
};