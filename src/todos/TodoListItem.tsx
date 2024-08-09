import {FC,PropsWithChildren} from 'react';
import {Todo} from '../models/todo.model';
interface TodolistItemProps {
    item: Todo
}
export const TodoListItem: FC<TodolistItemProps> = ({item}) => {

    return(
        <li>
            <div className='bg-yellow-500 m-3  rounded-md text-2xl'>

                {item.title}

            </div>
        </li>
    )
}