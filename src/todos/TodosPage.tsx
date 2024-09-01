import {FC, PropsWithChildren, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TodoList } from './TodoList';
// import {fakeTodos} from '../fakeData/todoListFakeData';
import { fetchTodosByUser } from '../services/apiTodos';
import { todoArraySchema } from '../models/todo.model';
import { useAuthStore, useTodoStore } from '../States/store';

export async function loader({params}){
    console.log("Loader called")
    const todos = await fetchTodosByUser(params.userId);
    return todos;
}

interface TodoPageProps {
    title?: string,
}


export const TodosPage: FC<PropsWithChildren<TodoPageProps>> = () => {
    const todosFromBackend =  todoArraySchema.parse( useLoaderData());
    useEffect(()=> {
        
    },[]);

    const todos = useTodoStore(state => state.todos);
    const logout = useAuthStore((state)=> state.logout);

    return(
        <>
            <button className='text-left rounded-md bg-yellow-500 px-5' onClick={logout}>Logout</button>
            <div className='m-5 bg-slate-500 text-center rounded-md p-3'>
                <TodoList items={todos} ></TodoList>
            </div>
        </>
    )

    
}