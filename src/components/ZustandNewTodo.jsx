'use client';

import {useRef} from 'react';

import {useTodos} from '@/stores';
import {Button} from '@/components/Button';

export const ZustandNewTodo = () => {
   const ref = useRef();
   const [addTodo] = useTodos(state => [state.addTodo]);

   const handleAddTodo = () => {
      addTodo(ref.current.value);
   };

   //TODO зробити форму в якій будем дод нову тудушку

   return (
      <>
         <Button>
            Add new todo
         </Button>
      </>
   );
};