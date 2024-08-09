import {FC, PropsWithChildren} from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoList } from './TodoList';
import {fakeTodos} from '../fakeData/todoListFakeData';
interface TodoPageProps {
    title?: string,
}


export const TodosPage: FC<PropsWithChildren<TodoPageProps>> = () => {
    const navigate = useNavigate()
    return(

        <>

        <button className='text-left rounded-md bg-yellow-500 p-3' onClick={() => {navigate(-1)}}>Back</button>
        <div className='m-5 bg-slate-500 text-center rounded-md'>
            <TodoList items={fakeTodos}></TodoList>
        </div>
        
        </>

    )
}