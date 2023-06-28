export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <section className={'bg-green-400'}>
            <div className={'cart border-r-4'}>
               <span>Lorem ipsum dolor sit amet.</span>
               <span>Lorem ipsum dolor.</span>
            </div>
            <p className={'text-mobile sm:text-desk text-primary'}>Lorem ipsum dolor sit amet, consectetur adipisicing
               elit. Natus, neque.</p>
            <a className={'text-secondary font-bold hover:text-primary transition'} href="#">link</a>
            <p className={'text-green-300 hover:text-primary transition'}>Lorem ipsum dolor sit amet, consectetur
               adipisicing elit. Amet doloremque dolorum eaque eligendi
               exercitationem hic ipsa molestiae, non numquam, quas quos rerum sapiente ullam voluptas.</p>
         </section>
      </main>
   )
}
