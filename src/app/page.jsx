'use client';

import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import cat from '@/assets/images/cat.png';
import {SubscribeButton} from '@/components/SubscribeButton';
import {Button, buttonVariants} from '@/components/Button';
import {Modal} from '@/components/Modal';
import {useFetchTodos} from '@/hooks/queries';
import {useModalStore} from '@/stores/useModalStore';

// const Count = dynamic(
//    () => import('../components/Count'),
//    // даже коли компонента 'use client' вона все рівно рендериться на сервері,
//    //ssr: false - вимикає рендер компонента 'use client' на сервері
//    { ssr: false }
// )

const HomePage = () => {
   const [filterCompleted, setFilterCompleted] = useState(false);
   const [isOpen, onClose, onOpen] = useModalStore((state) => [
      state.isOpen,
      state.onClose,
      state.onOpen,
   ]);

   // повертається useQuery з всіма методами і тд
   const todos = useFetchTodos({filter: filterCompleted});

   return (
      <>
         <br />
         <p>Hello World</p>
         <Modal
            title={'Are you sure absolutely?'}
            description={
               'This action cannot be undone. This will permanently delete your account and remove your data from our servers.'
            }
            triggerName={'Open modal 1'}
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
         >
            <p>content modal 1</p>
         </Modal>
         <br />
         <Modal
            className={'bg-zinc-900 text-zinc-100 hover:bg-zinc-800 mt-2'}
            title={'Are you absolutely?'}
            description={
               'This action cannot be undone. This will permanently delete your account and remove your data from our servers.'
            }
            triggerName={'Open modal 2'}
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
         >
            <p>content modal 2</p>
         </Modal>
         <br />
         {/*TODO можем використовувати стилі з компоненти Button, buttonVariants*/}
         <Link
            href={'/'}
            className={buttonVariants({variant: 'ghost', size: 'sm'})}
         >
        Link buttonVariants
         </Link>
         {/*TODO продвинутий варіант створення кнопки з готовими стилями + можем додавати свої при визові кнопки*/}
         <Button
            size={'lg'}
            variant={'subtle'}
            className={'w-full'} // додаткова стилізація через className
            onClick={() => console.log('click')}
            aria-label="upvote" // передаєм aria-label
         >
        Button buttonVariants
         </Button>
         <Button isLoading={true}>Button buttonVariants isLoading</Button>
         {/*TODO twMerge - стилізую кнопку задаючи стилі при обявлені*/}
         <SubscribeButton className={'text-white mb-3 uppercase'} />
         <SubscribeButton
            className={
               'text-blue-800 uppercase bg-white border-solid border-cyan-400 border custom-hover:hover:bg-blue-700 custom-hover:hover:text-white transition'
            }
         />
         {/*TODO twMerge можем передавати класи (головне щоб клас не був в @layer)*/}
         <SubscribeButton className={'button-active'} />
         {/*TODO group-hover:rotate-45, group - при наведені на кнопку ховер спрацбовує на дитині в якої group-hover*/}
         <button
            className={
               'group md:bg-white text-sky-400 p-2 transition flex gap-2 border border-solid border-cyan-300 rounded active:bg-amber-100 bg-amber-300'
            }
         >
            <span>button</span>
            <span
               className={
                  'w-5 h-5 bg-amber-300 group-hover:animate-spin transition block'
               }
            ></span>
         </button>
         {/*TODO задаєм group/name по якому буде працювати ховер*/}
         <div className={'flex group/button'}>
            <button
               className={'bg-green-400 group-hover/button:bg-orange-500 transition'}
            >
          with group-hover/name
            </button>
            <button className={'bg-green-400 group-hover:bg-violet-500 transition'}>
          without group-hover/name
            </button>
         </div>
         {/*TODO disabled hover*/}
         <button
            className={
               'px-2 py-2 rounded-lg  bg-sky-400 transition hover:opacity-80 disabled:bg-sky-400 hover:disabled:opacity-100'
            }
            disabled
         >
        button disabled
         </button>
         {/*TODO :after в класі (gradient)*/}
         {/*TODO max-xl:bg-gray-300 - бекграунд буде примінятися до (1280px)б, max-xl: == @media screen and (max-width) */}
         <section
            className={
               'max-xl:bg-gray-300 max-w-[1430px] w-full px-[15px] gradient'
            }
         >
            {/*TODO завжди буде columns-n колонки*/}
            <ul className={'columns-3 mb-16'}>
               <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            eaque itaque minima minus optio possimus, quasi quia ullam vel
            vitae. Ad beatae cumque explicabo illo labore magnam nam rem
            repellendus.8
               </li>
               <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            fugit illum inventore nulla possimus quo quod sunt ullam, veniam?
            Architecto fuga inventore mollitia nobis omnis qui quibusdam ratione
            soluta voluptas.8
               </li>
               <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            doloribus ea modi nam optio quas quibusdam. Autem, eius quod?
            Consectetur dicta dolorem, earum eos esse facere odio sit ut
            voluptates.8
               </li>
               <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur, cum dignissimos dolorem dolores enim in ipsa iste non
            numquam placeat quibusdam reiciendis rem rerum temporibus veniam!
            Deleniti dolorem itaque nesciunt.8
               </li>
               <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolor
            ducimus esse et eum excepturi explicabo illum natus, nobis placeat
            quaerat rerum sed sequi suscipit temporibus ullam vel velit. Eius?8
               </li>
            </ul>
            {/*TODO divide-y, divide-x - задасть бордер всім дітям крім останього*/}
            <div className="grid grid-cols-3 text-center divide-x">
               <div>01</div>
               <div>02</div>
               <div>03</div>
            </div>
            <p className={'pt-2 flex py-0 mb-0.5 flex-auto flex-col sm:flex-row'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
          ratione?
            </p>
            <ul
               className={
                  'space-y-2 my-2 lg:space-x-2 lg:space-y-0 flex flex-col lg:flex-row'
               }
            >
               <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            eaque itaque minima minus optio possimus, quasi quia ullam vel
            vitae. Ad beatae cumque explicabo illo labore magnam nam rem
            repellendus.8
               </li>
               <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            fugit illum inventore nulla possimus quo quod sunt ullam, veniam?
            Architecto fuga inventore mollitia nobis omnis qui quibusdam ratione
            soluta voluptas.8
               </li>
               <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            doloribus ea modi nam optio quas quibusdam. Autem, eius quod?
            Consectetur dicta dolorem, earum eos esse facere odio sit ut
            voluptates.8
               </li>
               <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur, cum dignissimos dolorem dolores enim in ipsa iste non
            numquam placeat quibusdam reiciendis rem rerum temporibus veniam!
            Deleniti dolorem itaque nesciunt.8
               </li>
               <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolor
            ducimus esse et eum excepturi explicabo illum natus, nobis placeat
            quaerat rerum sed sequi suscipit temporibus ullam vel velit. Eius?8
               </li>
            </ul>
            {/*TODO --font-montserrat*/}
            <p className={'text-yellow-700 hidden md:block font-main'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam
          dignissimos doloribus esse excepturi iusto maxime nostrum quo repellat
          totam.
            </p>
            {/*TODO --font-inter*/}
            <p className={'text-green-600 hidden md:block font-secondary'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam
          dignissimos doloribus esse excepturi iusto maxime nostrum quo repellat
          totam.
            </p>
            {/*TODO --font-days-one*/}
            <p className={'text-blue-400 hidden md:block font-days'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam
          dignissimos doloribus esse excepturi iusto maxime nostrum quo repellat
          totam.
            </p>
            {/*TODO space-x-[30px], space-x-2(для row) - заміна gap для flex, задає відступи для дітей(х- зліва) всім крім першого (херово працює з flex-wrap). space-y-2(дял col)*/}
            <ul
               role="list"
               className="flex flex-wrap p-6 divide-y divide-slate-200 space-x-[10px]"
            >
               <li className="list-item w-2/5">
                  <div className="ml-3 overflow-hidden">
                     <p className="text-sm font-medium text-slate-900">name</p>
                     <p className="truncate text-sm text-slate-500">email</p>
                  </div>
               </li>
               <li className="list-item w-[calc(40%-10px)]">
                  <div className="ml-3 overflow-hidden">
                     <p className="text-sm font-medium text-slate-900">name</p>
                     <p className="truncate text-sm text-slate-500">email</p>
                  </div>
               </li>
               <li className="list-item w-[calc(20%-10px)]">
                  <div className="ml-3 overflow-hidden">
                     <p className="text-sm font-medium text-slate-900">name</p>
                     <p className="truncate text-sm text-slate-500">email</p>
                  </div>
               </li>
               <li className="list-item w-1/5">
                  <div className="ml-3 overflow-hidden">
                     <p className="text-sm font-medium text-slate-900">name</p>
                     <p className="truncate text-sm text-slate-500">email</p>
                  </div>
               </li>
            </ul>
            {/*TODO прозорість /25*/}
            <p className={'text-lime-600/25'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam
          dignissimos doloribus esse excepturi iusto maxime nostrum quo repellat
          totam.
            </p>
            {/*TODO not(:last-child)*/}
            <div className="my-[20px] [&>*:not(:last-child)]:border-b-2 [&>*:not(:last-child)]:border-amber-300 [&>*:not(:last-child)]:border-solid">
               <p className="border-b-blue-300 py-2">
            This is a paragraph to show an example of :not selector in
            tailwindcss
               </p>
               <p className="border-b-blue-300 py-2">
            This is a paragraph to show an example of :not selector in
            tailwindcss
               </p>
               <p className="border-b-blue-300 py-2">
            This is a paragraph to show an example of :not selector in
            tailwindcss
               </p>
               <p className="border-b-blue-300 py-2">
            This is a paragraph to show an example of :not selector in
            tailwindcss
               </p>
            </div>
            {/*TODO :not(тег)]*/}
            <div className="[&>*:not(p)]:font-bold [&>*:not(p)]:mt-10">
               <h1>This is heading </h1>
               <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            quis itaque officiis. Repellat nemo laudantium corporis. At
            temporibus consequatur doloribus voluptates praesentium a voluptate
            vero nulla! Ea repudiandae illum corrupti.
               </p>
               <h2>This is heading two</h2>
               <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sequi
            aut necessitatibus sapiente ex cum enim molestias? Aspernatur fugiat
            facilis pariatur vitae repellat, veritatis culpa cupiditate qui
            tempore quidem. Ipsum.
               </p>
               <h2>This is heading three</h2>
               <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sequi
            aut necessitatibus sapiente ex cum enim molestias? Aspernatur fugiat
            facilis pariatur vitae repellat, veritatis culpa cupiditate qui
            tempore quidem. Ipsum.
               </p>
            </div>
            <div
               className={
                  'container flex flex-col items-center justify-center gap-[20px]'
               }
            >
               <h1 className={'text-4xl font-bold text-center'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               </h1>
               {/*TODO колір svg буде як в батька text-lime-600*/}
               <span className={'text-lime-600'}>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                     className="h-5 w-5"
                  >
                     <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
               </span>
               <p className={'text-lg text-center'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
            neque.
               </p>
               <a
                  className={
                     'text-secondary font-bold hover:text-primary transition self-end'
                  }
                  href="#"
               >
            link
               </a>
            </div>
            <Image src={cat} alt={'cat'} />
            <div className={'cart border-r-4 parent'}>
               <span className={'bg-blue-500 px-4 py-2'}>
            Lorem ipsum dolor sit amet.
               </span>
               <span className={'bg-blue-500 px-4 py-2 children'}>
            Lorem ipsum dolor.
               </span>
            </div>
            <p className={'text-mobile sm:text-desk text-primary'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
          neque.
            </p>
            <a
               className={'text-secondary font-bold hover:text-primary transition'}
               href="#"
            >
          link
            </a>
            {/*TODO коліп з :root зміних var(--accent-color)*/}
            <p
               className={'text-[var(--accent-color)] hover:text-primary transition'}
            >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          doloremque dolorum eaque eligendi exercitationem hic ipsa molestiae,
          non numquam, quas quos rerum sapiente ullam voluptas.
            </p>
            {/*TODO lg:mt-0 lg:flex-col @media потрібно задавати кожній властивості окремо*/}
            {/*TODO hover:text-primary hover:underline decoration-[6px] потрібно задавати кожній властивості окремо*/}
            <div
               className={
                  'container flex mt-[10px] lg:mt-0 lg:flex-col text-gray-600'
               }
            >
               <a
                  className={
                     'text-secondary w-[50%] font-bold hover:text-primary hover:underline decoration-[6px] underline-offset-4 transition'
                  }
                  href="#"
               >
            link
               </a>
            </div>
            <p className={'primary-text'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
          neque.
            </p>
            {/*TODO :after*/}
            <div
               className={
                  'w-[100px] h-[200px] bg-cover bg-center relative after:contents after:bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 after:blur-[125px] after:w-[300px] after:h-[250px] after:absolute'
               }
            ></div>
            {/*TODO якщо так писати то в тулзах класи будуть з ... (не буде видно всіх класів/свойств в Firefox) в chrome все буде ок*/}
            <div
               // style={{backgroundImage: `url(${background})`}}
               className={`
                     bg-[url('../assets/images/cat.png')]
                     bg-no-repeat
                     h-[220px]
                     w-[220px]
                     text-center
                     `}
            ></div>
            {/*TODO :after*/}
            <label className="block">
               <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Email
               </span>
               <input
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
               />
            </label>
            <button
               className={`active focus:outline-none focus:ring ring-violet-900 rounded active:text-fuchsia-700 hover:text-amber-700 transition`}
            >
          button
            </button>
         </section>
         <footer>fo0ter</footer>
      </>
   );
};

export default HomePage;
