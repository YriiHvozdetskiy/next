'use client';

import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from 'react-hook-form';

import {useTodosStore} from '@/stores';
import {Modal} from '@/components/Modal';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage
} from '@/components/ui/Form';
import {Button} from '@/components/ui/Button';
import {Input} from '@/components/ui/Input';
import {useModalStore} from '@/stores/useModalStore';


const formSchema = z.object({
   todo: z.string().min(2).max(50),
})
export const ZustandNewTodo = () => {
   const [addTodo] = useTodosStore(state => [state.addTodo]);
   const [isOpen, onClose, onOpen] = useModalStore(state => [state.isOpen, state.onClose, state.onOpen])

   const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
         todo: "",
      },
   })

   const onSubmit = (values, e) => {
      addTodo(values.todo);
      onClose()
      form.reset()

      console.log('form', form)
      console.log('values', values)
      console.log('e', e)
   };

   return (
      <>
         <Modal
            className={'bg-zinc-900 text-zinc-100 hover:bg-zinc-800 mt-2'}
            title={'add new todo'}
            description={''}
            triggerName={'Add new Todo'}
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
         >
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-8'}>
                  <FormField
                     control={form.control}
                     name="todo"
                     render={({field}) => (
                        <FormItem>
                           <FormLabel>Add Todo</FormLabel>
                           <FormControl>
                              <Input placeholder="add todo" {...field} />
                           </FormControl>
                           <FormMessage/>
                        </FormItem>
                     )}
                  />
                  <Button variant={'outline'} type="submit">Submit</Button>
               </form>
            </Form>
         </Modal>
      </>
   );
};