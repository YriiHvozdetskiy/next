import {Navigation} from '@/components/Navigation';
import {cn} from '@/lib/utils';

export const Header = ({className}) => {

   return (
      // TODO cn - тепер можем міняти стилі
      <header className={cn('container mb-8 py-2', className)}>
         <Navigation/>
      </header>
   );
};