import {FC,PropsWithChildren} from 'react';
import {Todo} from '../models/todo.model';
interface TodolistItemProps {
    item: Todo,
}

export const TodoListItem: FC<TodolistItemProps> = ({item}) => {

    return(
        <li>
            <div className='bg-yellow-500 my-2 p-2 rounded-md text-2xl text-left grid grid-rows-2'>
                <div className='font-sans'>
                    {item.title}
                </div>
                <div className='italic'>
                    {item.description}
                </div>
            </div>
        </li>
    )
}
