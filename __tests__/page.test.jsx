import {render} from '@testing-library/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Page from '@/app/page';

describe('Page', () => {
   it('renders hello world', () => {
      const queryClient = new QueryClient();
      const {getByText} = render(
         <QueryClientProvider client={queryClient}>
            <Page/>
         </QueryClientProvider>
      );
      expect(getByText('Hello World')).toBeInTheDocument();
   });
});
