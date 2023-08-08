import {nanoid} from 'nanoid';
import {create} from 'zustand';
import {persist, devtools} from 'zustand/middleware'
import {wait} from '@/utils';

// https://youtu.be/l6WDSN-_HSI

export const useTodosStore = create(
   // TODO через devtools коли визиваєм хук властивості підсвічуються ніби їх нема
   devtools(
      persist(
         (set, get) => ({
            todos: [
               {id: 1, title: 'Learn JS', completed: true},
               {id: 2, title: 'Learn React', completed: false},
            ],
            loading: false,
            error: null,
            // перший аргумент весь наш store(todos, loading, error)
            // повертати з ф-ції set - це має бути обєкт в якому ми змінюєм якесь поле нашого стору
            /*
            addTodo: (title) => set(state => {
            const newTodo = { id: nanoid(), title, completed: false }
               return { todos: [...state.todos, newTodo] }
             })
            addTodo: (title) => set(state => ({ todos: [...state.todos, { id: nanoid(), title, completed: false }] }))
             */

            // третій підхід - використовуєм ф-цію get()
            addTodo: (title) => {
               const newTodo = {id: nanoid(), title, completed: false}

               // через get() отримуємо необхідні поля з стейту і повертаємо ОБЄКТ
               set({todos: [...get().todos, newTodo]},
                  false,
                  'addTodo' // даєм назву action в ReduxDevtools
               )
            },
            toggleTodo: (todoId) => set({
               todos: get().todos.map(
                  todo => todoId === todo.id
                     ? {...todo, completed: !todo.completed}
                     : todo
               )
            }),
            // асинхроність
            fetchTodos: async () => {
               // починаєм показувати лоадер
               set({loading: true},
                  false,
                  'fetchTodos' // даєм назву action в ReduxDevtools
               )

               try {
                  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => res.json())

                  await wait(2000)

                  // if (!response.ok) throw new Error('Failed to fetch! Try again.')

                  // перезаписуєм значення
                  set({todos: response, error: null})

                  // зберігаєм сторі і дод нові
                  // set({todos: [...get().todos, ...response], error: null})
               } catch (error) {
                  set({error: error.message})
               } finally {
                  // ховаєм лоадер
                  set({loading: false})
               }
            }
         }),
         // назва ключа в localStore
         {
            name: 'todos'
         }
      ),
      {
         name: 'TodoStore' // даєм назву store в ReduxDevtools
      }
   )
)