import {FC} from 'react';
import { LoginForm } from './LoginForm';
// import { useAuthStore } from '../States/store';
// import { useNavigate } from 'react-router-dom';

// const StyledBox = styled(Box)`

//     background-color: aliceblue;
//     margin-left: 20%;
//     margin-right: 20%;
//     margin-top: 10%;
//     padding: 20%;
//     border: solid gray;
//     border-radius: 10px;
//     min-height: 60vh;
    
// `

export const LoginPage : FC = () => {
    // const isAuthenticated = useAuthStore(state => state.isAuthenticated);
    // const userId = useAuthStore(state => state.user);
    // const navigate = useNavigate();

    // if(isAuthenticated){
    //     console.log('navigation to todopage')
    //     navigate(`/todos/${userId}`,{});

    // }

    return (
        <LoginForm/>
    )
}
