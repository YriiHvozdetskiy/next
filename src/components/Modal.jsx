import {twMerge} from 'tailwind-merge';

import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger
} from '@/components/ui/Dialog';


export const Modal = (
   {
      title,
      description,
      children,
      triggerName,
      className,
      onClose,
      onOpen,
      isOpen,
   }) => {

   const onChange = (open) => {
      if (!open) {
         onClose();
      }
   };

   return (
      <Dialog open={isOpen} onOpenChange={onChange}>
         <DialogTrigger
            className={twMerge('py-1 px-6 rounded-md bg-violet-600 text-black', className)}
            onClick={ onOpen}
         >
            {triggerName}
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