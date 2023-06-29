import cat from '@/assets/images/cat.png';
import Image from 'next/image';

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <section className={'bg-gray-300'}>
            <Image
               src={cat}
               alt={'cat'}
            />
            <div className={'cart border-r-4 parent'}>
               <span className={'bg-blue-500 px-4 py-2'}>Lorem ipsum dolor sit amet.</span>
               <span className={'bg-blue-500 px-4 py-2 children'}>Lorem ipsum dolor.</span>
            </div>
            <p className={'text-mobile sm:text-desk text-primary'}>Lorem ipsum dolor sit amet, consectetur adipisicing
               elit. Natus, neque.</p>
            <a className={'text-secondary font-bold hover:text-primary transition'} href="#">link</a>
            <p className={'text-fuchsia-700 hover:text-primary transition'}>Lorem ipsum dolor sit amet, consectetur
               adipisicing elit. Amet doloremque dolorum eaque eligendi
               exercitationem hic ipsa molestiae, non numquam, quas quos rerum sapiente ullam voluptas.</p>
            <div className={'container flex mt-[10px]'}>
               <a className={'text-secondary w-[50%] font-bold hover:text-primary transition'} href="#">link</a>
            </div>
            <p className={'primary-text'}>
               Lorem ipsum dolor sit amet, consectetur adipisicing
               elit. Natus, neque.
            </p>
            <div className={"bg-[url('product-1.png')]"}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, repellat?
            </div>
            <div className={"bg-[url('../assets/images/cat.png')] bg-no-repeat h-[220px] w-[220px]"}></div>
            <label className="block">
               <span
                  className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Email
               </span>
               <input
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  type="email"
                  name="email"
                  placeholder="you@example.com"/>
            </label>
         </section>
      </main>
   )
}
