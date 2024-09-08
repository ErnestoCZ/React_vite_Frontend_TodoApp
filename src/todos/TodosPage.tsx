import { FC }from 'react';
import { TodoList } from './TodoList';
import { fetchTodosByUser } from '../services/apiTodos';
import { useAuthStore } from '../States/store';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { Center, Spinner } from '@chakra-ui/react';

export const TodosPage: FC = () => {
    const user = useParams()
    console.log(user)
    const userId = useAuthStore(state => state.user);
    const logout = useAuthStore((state)=> state.logout);
    const navigate = useNavigate();

    function onLogoutHandler(){
        logout();
        navigate('/')
    }
    const {data: todosData, isLoading} = useQuery({queryKey: ['todosByUserId', {userId}], queryFn: () => fetchTodosByUser(userId)});
    
    if(isLoading){
        return(
            <Center h={'100%'}>
                <Spinner/>Todos are loading...
            </Center>
        )
    }

    if(!isLoading && todosData) {
        return(
        <>
            <button className='text-left rounded-md bg-yellow-500 px-5 py-3' onClick={onLogoutHandler}>Logout</button>
            <div className='m-5 bg-slate-500 text-center rounded-md p-3'>
                <TodoList items={todosData} ></TodoList>
            </div>
        </>
    )
    }

    return null;


    

    
}