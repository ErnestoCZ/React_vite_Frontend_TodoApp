import {FC, useEffect} from 'react';
import { LoginForm } from './LoginForm';
import { useAuthStore } from '../States/store';
import { useNavigate, } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';


export const LoginPage : FC = () => {
    const isAuthenticated = useAuthStore(state => state.isAuthenticated);
    const userId = useAuthStore(state => state.user);
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    
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
