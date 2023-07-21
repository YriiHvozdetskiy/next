import {useRef} from 'react';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {createPost} from '@/fetch';

export const CreatePost = () => {
   const titleRef = useRef()
   const bodyRef = useRef()
   const queryClient = useQueryClient()

   const createPostMutation = useMutation({
      mutationFn: createPost, // автоматично визивається ф-ція в яку передаються параметри з handleSubmit(createPostMutation.mutate)
      //retry:3, // буде три спроби щось зробити

      // визветься раніше за mutationFn
      onMutate: (variables) => {
         // Викликається перед початком мутації


         // Оновлення локального кешу з новими даними перед відправкою даних на сервер
         // queryClient.setQueryData(['posts'], variables);

         // Тут ви можете встановити або зберегти додаткові значення в контексті

         // Приклад: Зберегти попередні дані перед виконанням мутації
         //return { prevData: /* попередні дані */, ...variables };
         return {context: 'onMutateContext'}
      },
      onSuccess: (data, variables, context) => {
         // setQueryData - оновлює дані в локальному кеші, оновлює дані в кеші для запиту з ключем ["posts", data.id] і замінює їх на значення data.
         queryClient.setQueryData(["posts", data.id], data)

         // після успішної зміни даних, оновлюєм на клієнті їх через ключ ['posts']
         // exact: true - оновлює дані які ТОЧНО співпадають з queryKey
         queryClient.invalidateQueries(["posts"], {exact: true})

         // context - це те що повертає ф-ція onMutate
         console.log('context', context)
      },
   })

   const handleSubmit = (e) => {
      e.preventDefault()

      createPostMutation.mutate({
         title: titleRef.current.value,
         body: bodyRef.current.value,
      })

      titleRef.current.value = ''
      bodyRef.current.value = ''
   }

   return (
      <>
         <div className={'mt-5'}>
            {createPostMutation.isError && JSON.stringify(createPostMutation.error)}
            <h1>Create Post</h1>
            <form
               className={'border-2 flex flex-col space-y-4 p-4'}
               onSubmit={handleSubmit}
            >
               <div>
                  <label htmlFor="title">Title</label>
                  <input
                     className={'border-2'}
                     id="title"
                     ref={titleRef}
                  />
               </div>
               <div>
                  <label htmlFor="body">Body</label>
                  <input
                     className={'border-2'}
                     id="body"
                     ref={bodyRef}
                  />
               </div>
               <button disabled={createPostMutation.isLoading}>
                  {createPostMutation.isLoading ? "Loading..." : "Create"}
               </button>
            </form>
         </div>
      </>
   );
};