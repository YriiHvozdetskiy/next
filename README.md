# хороша практика
розділяєм імпорти: глобальні вище групуєм, локальні нище

# замітки:
- якщо потрібні якісь дані в різних компонентах на ОДНІЙ сторінці, використовуєм `useQuery` з ['keyName'] в кастомному хуці, робим запит за даними де потрібно,
запит буде ОДИН всі наступні будуть братися з кешу тому використовувати zustand/redux немає необхідності див.TestUseQuery | const {data} = useQuery(['MyPosts']) 
але queryKey повинен бути однаковий ["MyPosts", null] , ["MyPosts"] - це різні

- є головний layout на app рівні, всі решта(layout інших сторінок) вложені в нього

- альтернатива useGetStore див.ZustandTodoList

- для `модалки` зробили глобальний стейт за допомогою `zustand` 

- `форма з валідацією` в ZustandNewTodo

# react-query
- назва хука для запитів за допомогою react-query: [useНазваЩоЦе + Query] дод стово Query н-д: usePostsQuery

1. створюєм свої кастомні хуки (див hooks/queries)
2. для актуалізації даних після "мутації" викор - queryClient.invalidateQueries(['keyName']) в ф-ції: onSuccess / onSettled

в `useQuery` можна обходитись без queryKey, queryFn, а писати відразу масив залежностей і ф-цію див.useFetchTodos (трохи міняється спосіб виклику)
якщо ми будем використовувати useQuery ще десь НА ТІЙ САМІЙ СТОРІНЦІ будем робити fetch, то за цим ключом ['CardPosts'], useQuery візьме дані з кешу і не буде робити ще один fetch
`staleTime` - (the default staleTime: 0) індивідуальний час зберігання кешу, після якого буде виконаний запит ПІСЛЯ ВТРАТИ ФОКУСУ З ВКЛАДКИ, СТОРІНКИ
`setQueryData` - оновлення кешу в ручну (див.CreatePost)
`onMutate` - виконується перед мутацією, можем мітєво оновити дані на клієнті без затримки, (див.CreatePost)
`enabled` використовується для керування активацією або вимиканням автоматичних запитів на сервер.

# zustand

- назва хука для стора: [useНазваЩоЦе + Store] дод стово Store н-д: useModalStore

`shallow` -  використовує лише поверхневе (поверхневе) порівняння при перевірці змін стану. порівнюватиме тільки посилання на об'єкти та масиви, а не їхні внутрішні значення
в компоненті `Count` записуєм count в `localStore` там використовуєм кастомний хук `useGetStore` який фіксить помилку з `hydration`
`sessionStorage` - якщо потрібно щось записати використовуєм `createJSONStorage` див.useCounterStore
`partialize` - якщо не хочемо записувати якесь поле в localStore див.useCounterStore
порядок при деструктуризації ВАЖЛИВИЙ:  const [increaseCount, decreaseCount, count] = useCounterStore(state => [state.increaseCount, state.decreaseCount, state.count]
`clearStorage` - назваСтора.persist.clearStorage() див.MyPosts
не робем ДЕСТРУКТИРІЗАЦІЮ -  const {todos} = useTodosStore() Тому що якщо змінем якусь назву в хуку буде ререндер кругом де визивається цей хук