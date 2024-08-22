import {FC} from 'react';
import { Todo } from '../models/todo.model';
import { TodoListItem } from './TodoListItem';
import { TodoInputForm } from './TodoInputForm';
import { UnorderedList } from '@chakra-ui/react';
import styled from 'styled-components';

interface TodoListProps {
    items: Todo[],
    addTodoHandler: (newTodo: Todo) => void
}
const StyledUnorderedTodoListBox = styled(UnorderedList)`
    
`
export const TodoList: FC<TodoListProps> = ({items,addTodoHandler}) => {

    return(
        <>
        <h2 className='text-5xl text-left m-3 '>MyTodos</h2>
        
        <div className='grid grid-cols-1 gap-2'>
            <div className='border-solid border-2 border-yellow-500 m-2 p-2'>

                <TodoInputForm addTodoHandler={addTodoHandler} />
                <StyledUnorderedTodoListBox>
                    {items.map(item => <TodoListItem key={item.id} item={item}></TodoListItem>)}
                </StyledUnorderedTodoListBox>            
            </div>
        </div>
        </>
    )
}