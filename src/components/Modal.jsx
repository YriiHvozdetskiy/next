import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger
} from '@/components/ui/Dialog';
import {twMerge} from 'tailwind-merge';

export const Modal = (
   {
      title,
      description,
      children,
      trigger,
      className,
   }) => {

   return (
      <Dialog>
         <DialogTrigger className={twMerge('py-1 px-6 rounded-md bg-violet-600 text-black', className)}>
            {trigger}
         </DialogTrigger>
         <DialogContent>
            <DialogHeader>
               <DialogTitle>{title}</DialogTitle>
               <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div>{children}</div>
         </DialogContent>
      </Dialog>
   );
};