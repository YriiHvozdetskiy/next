import {Calendar} from '@/components/ui/Calendar';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/Accordion';

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
      </div>
   )
}
export default ShadcnUiPage;