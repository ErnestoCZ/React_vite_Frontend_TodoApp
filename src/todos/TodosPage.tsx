import {FC, PropsWithChildren} from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { TodoList } from './TodoList';
import {fakeTodos} from '../fakeData/todoListFakeData';
import { fetchTodos } from '../services/apiTodos';
import { Todo, todoArraySchema } from '../models/todo.model';




export async function loader(){
    const todos = await fetchTodos();
    return todos;
}

interface TodoPageProps {
    title?: string,
}


export const TodosPage: FC<PropsWithChildren<TodoPageProps>> = () => {
    const todos =  todoArraySchema.parse( useLoaderData())
    

    const navigate = useNavigate()
    return(

        <>
        <button className='text-left rounded-md bg-yellow-500 px-5' onClick={() => {navigate(-1)}}>Back</button>
        <div className='m-5 bg-slate-500 text-center rounded-md'>
            <TodoList items={todos}></TodoList>
        </div>
        </>

    )
}