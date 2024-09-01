import {FC} from 'react';
import { Todo } from '../models/todo.model';
import { TodoListItem } from './TodoListItem';
import { TodoInputForm } from './TodoInputForm';
import { UnorderedList } from '@chakra-ui/react';
import styled from 'styled-components';

interface TodoListProps {
    items: Todo[],
    setTodoHandler?: (newTodo: Todo) => void
}
const StyledUnorderedTodoListBox = styled(UnorderedList)`
    list-style-type: none;
    list-style: none;
`
export const TodoList: FC<TodoListProps> = ({items}) => {

    
    return(
        <>
        <h2 className='text-5xl text-left m-3'>MyTodos</h2>
        
        <div className='grid grid-cols-1 gap-2'>
            <div className='border-solid border-2 border-yellow-500 m-2 p-2'>

                <TodoInputForm />
                <StyledUnorderedTodoListBox>
                    {items.map(item => <TodoListItem key={item.id} item={item}></TodoListItem>)}
                </StyledUnorderedTodoListBox>            
            </div>
        </div>
        </>
    )
}