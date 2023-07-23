import {ZustandTodoList} from '@/components/ZustandTodoList';
import {ZustandNewTodo} from '@/components/ZustandNewTodo';
import {ZustandFetchTodos} from '@/components/ZustandFetchTodos';

const ZustandPage = () => {

   return (
      <>
         <p className={'mb-4'}>ZustandPage</p>
         <ZustandTodoList/>
         <ZustandNewTodo/>
         <br/>
         <ZustandFetchTodos/>
      </>
   );
};

export default ZustandPage;