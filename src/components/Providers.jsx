'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {Toaster} from 'react-hot-toast';

export const Providers = ({children}) => {
   //TODO можем змінити налаштування кешу ГЛОБАЛЬНО, щоб запит не виконувався 5хв, тепер після заданого часу кеш буде 'stale' і при втраті фокусу з вкладки буде виконаний 'fetching'

   // const queryClient = new QueryClient({defaultOptions: {queries: {staleTime: 1000 * 60 * 5}}});
   const queryClient = new QueryClient();

   return (
      <QueryClientProvider client={queryClient}>
         {children}
         <ReactQueryDevtools/>
         <Toaster/>
      </QueryClientProvider>
   )
}
