import {FC, PropsWithChildren, useState} from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import { TodoList } from './TodoList';
// import {fakeTodos} from '../fakeData/todoListFakeData';
import { fetchTodos } from '../services/apiTodos';
import {Todo, todoArraySchema } from '../models/todo.model';




export async function loader(){
    const todos = await fetchTodos();
    return todos;
}

interface TodoPageProps {
    title?: string,
}


export const TodosPage: FC<PropsWithChildren<TodoPageProps>> = () => {
    const todosFromBackend =  todoArraySchema.parse( useLoaderData())
    const [todos,setTodos] = useState<Todo[]>(todosFromBackend)
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    console.log(navigation)
    const navigate = useNavigate()


    function addTodoHandler(newTodo: Todo) {
        
    }

    return(

        <>
        {isLoading && <h1>Loading...</h1>}
        <button className='text-left rounded-md bg-yellow-500 px-5' onClick={() => {navigate(-1)}}>Back</button>
        <div className='m-5 bg-slate-500 text-center rounded-md p-3'>
            <TodoList items={todos} addTodoHandler={addTodoHandler}></TodoList>
        </div>
        </>

    )

    
}