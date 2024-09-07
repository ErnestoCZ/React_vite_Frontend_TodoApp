import {FC, useEffect} from 'react';
import { LoginForm } from './LoginForm';
import { useAuthStore } from '../States/store';
import { useNavigate, } from 'react-router-dom';


export const LoginPage : FC = () => {
    const isAuthenticated = useAuthStore(state => state.isAuthenticated);
    const userId = useAuthStore(state => state.user);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(isAuthenticated){
            navigate(`/todos/${userId}`);
        }
    },[userId,isAuthenticated,navigate]);

    return (
        <>
            <LoginForm/>
        </>
    )
}
