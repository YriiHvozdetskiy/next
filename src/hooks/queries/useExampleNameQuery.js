import {useQuery} from '@tanstack/react-query';

const fetchExample = async () => {
   // made fetch
}

/*
   робем кастомний хук для отримання даних (useExampleNameQuery)
   йому при визові передаєм ключ, і якщо потрібно ід
   fetchExample - асинхрона ф-ція для запиту(fetch, axios) яка повертає дані
*/

export const useExampleNameQuery = (keyName, id) => useQuery({
   queryKey: [keyName, id],
   queryFn: fetchExample,
});

