import {twMerge} from 'tailwind-merge';

export const SubscribeButton = ({className}) => {

   return (
      <button
         {/*TODO стилі які передаєм при обєвлені перебивають вже існуючі (text-black)*/}
         className={twMerge(
            'py-1 px-6 rounded-md bg-violet-600 text-black',
            className
         )}
         type={'button'}
      >
         Subscribe
      </button>
   )
}