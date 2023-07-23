import {ZustandTodoList} from '@/components/ZustandTodoList';
import {ZustandNewTodo} from '@/components/ZustandNewTodo';
import {ZustandFetchTodos} from '@/components/ZustandFetchTodos';
import {Count} from '@/components/Count';
import {Column} from '@/components/Column';

const ZustandPage = () => {

   return (
      <>
         <section className={'container flex justify-center space-x-3'}>
            <Column state={'Planned'}/>
            <Column state={'Ongoing'}/>
            <Column state={'Done'}/>
         </section>
         <hr/>
         <p className={'mb-4'}>ZustandPage</p>
         <ZustandTodoList/>
         <ZustandNewTodo/>
         <br/>
         <ZustandFetchTodos/>
         <hr/>
         <Count/>
         <hr/>
      </>
   );
};

export default ZustandPage;