import {FC} from 'react';
import { Todo } from '../models/todo.model';
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
    items: Todo[]
}
export const TodoList: FC<TodoListProps> = ({items}) => {

    return(

        <>
        <h2 className='text-5xl text-left m-3 '>MyTodos</h2>
        <div className='grid grid-cols-2 gap-2'>

        <div className='border-solid border-2 border-yellow-500 m-2 p-2'>
            <ul >
                {items.map(item => <TodoListItem key={item.id} item={item}></TodoListItem>)}
            </ul>            
        </div>

        </div>
         
        </>
    )
}