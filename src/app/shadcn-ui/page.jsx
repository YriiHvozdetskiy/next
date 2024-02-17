import {Calendar} from '@/components/ui/Calendar';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/Accordion';
import {
   Pagination,
   PaginationContent, PaginationEllipsis,
   PaginationItem,
   PaginationLink, PaginationNext,
   PaginationPrevious
} from '@/components/ui/pagination';

const ShadcnUiPage = () => {

   return (
      <div>
         shadcn-ui
         <Calendar
            mode="single"
            className="rounded-md border font-main calendar-button"
         />
         <Accordion type={'single'} collapsible>
            <AccordionItem value="item-1">
               <AccordionTrigger className={'text-sky-600'}>
                  Is it accessible?
               </AccordionTrigger>
               <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
               </AccordionContent>
            </AccordionItem>
         </Accordion>
         <Pagination>
            <PaginationContent>
               <PaginationItem>
                  <PaginationPrevious href="#"/>
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink href="#" isActive>
                     2
                  </PaginationLink>
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                  <PaginationEllipsis/>
               </PaginationItem>
               <PaginationItem>
                  <PaginationNext href="#"/>
               </PaginationItem>
            </PaginationContent>
         </Pagination>
      </div>
   )
}
export default ShadcnUiPage;