'use client';

import {shallow} from 'zustand/shallow';

import {useTodosStore} from '@/stores';
import {Button} from '@/components/Button';

export const ZustandFetchTodos = () => {
   const [loading, error, fetchTodos] = useTodosStore(state => [
         state.loading,
         state.error,
         state.fetchTodos,
      ],
      //TODO без shallow буде перерендер всіх компонентів де визивається хук zustand
      shallow
   );
   console.log('render ZustandFetchTodos');

   return (
      <Button isLoading={loading} onClick={fetchTodos} className={'mt-5'}>
         {!error ? 'Get todos' : {error}}
      </Button>
   );
};