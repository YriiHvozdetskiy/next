'use client';

import {Toaster} from 'react-hot-toast';
import {
   isServer,
   QueryClient,
   QueryClientProvider,
} from '@tanstack/react-query';

function makeQueryClient() {
   return new QueryClient({
      defaultOptions: {
         queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            // staleTime: 60 * 1000, // 1 minute
         },
      },
   });
}

let browserQueryClient;

function getQueryClient() {
   if (isServer) {
      // Server: always make a new query client
      return makeQueryClient();
   } else {
      // Browser: make a new query client if we don't already have one
      // This is very important, so we don't re-make a new client if React
      // suspends during the initial render. This may not be needed if we
      // have a suspense boundary BELOW the creation of the query client
      if (!browserQueryClient) browserQueryClient = makeQueryClient();
      return browserQueryClient;
   }
}

export const Providers = ({children}) => {
   //TODO можем змінити налаштування кешу ГЛОБАЛЬНО, щоб запит не виконувався 5хв, тепер після заданого часу кеш буде 'stale' і при втраті фокусу з вкладки буде виконаний 'fetching'

   const queryClient = new QueryClient({
      defaultOptions: {
         queries: {
            refetchOnWindowFocus: false,
         },
      },
   });

   return (
      <QueryClientProvider client={queryClient}>
         {children}
         <Toaster />
      </QueryClientProvider>
   );
};
