import {FC} from 'react';
import {styled} from 'styled-components';
import {Box} from '@chakra-ui/react';
import { LoginForm } from './LoginForm';

const StyledBox = styled(Box)`

    background-color: aliceblue;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 10%;
    padding: 20%;
    border: solid gray;
    border-radius: 10px;
    min-height: 60vh;
    
`

export const LoginPage : FC = () => {

    return (
        <LoginForm/>
    )
}
