import {ChangeEvent, FC, PropsWithChildren, useRef} from 'react';
import {styled} from 'styled-components';
import {Box, Button, FormControl, FormHelperText, Input} from '@chakra-ui/react';

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


export const LoginPage : FC<PropsWithChildren<any>> = () => {
    const emailInput = useRef<string>('');
    const passwordInput = useRef<string>('');

    function onEmailChange(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        emailInput.current = event.target.value;
        console.log(emailInput.current)
        
    }
    function onPasswordChange(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        passwordInput.current = event.target.value;
        console.log(passwordInput.current)
        
    }
    function onLoginSubmit() {
        //TODO submit function
    }
    return (
        <StyledBox>
            <form onSubmit={onLoginSubmit}>

            <FormControl>
                <Input type='email' placeholder='E-Mail' onChange={onEmailChange}/>
                <Input type='password' placeholder='Password' onChange={onPasswordChange}/>
                <Box >
                    <Button colorScheme='blue' type='submit'>Login</Button>
                </Box>
            </FormControl>

            </form>
            
        </StyledBox>
    )
}