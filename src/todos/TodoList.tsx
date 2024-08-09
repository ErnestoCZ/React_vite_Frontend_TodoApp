import {FC} from 'react';
import { Todo } from '../models/todo.model';
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
    items: Todo[]
}
export const TodoList: FC<TodoListProps> = ({items}) => {

    return(

        <>
        <h2 className='text-5xl text-left m-3 '>Todos</h2>
        <ul >
            {items.map(item => <TodoListItem item={item}></TodoListItem>)}
        </ul>
        
        </>
    )
}