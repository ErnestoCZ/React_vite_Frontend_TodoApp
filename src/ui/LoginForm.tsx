import {FC} from 'react';
import {useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';
import {Input, Box, Button, Center, Flex, FormControl, FormLabel} from '@chakra-ui/react';
import styled from 'styled-components';

type FormValues= {
    email:string
    password: string
}

const StyledLoginForm = styled(Box)`
    background-color: aliceblue;
    margin-left: 0%;
    margin-right: 0%;
    margin-top: 0%;
    padding: 20%;
    border-radius: 10px;
    min-height: 100vh;

`
const StyledCenteredBox = styled(Center)`
    border-radius: 10px;
    border: 1px solid black;
    padding: 10px;
    
`
export const LoginForm:FC = () => {
    
    const {register, handleSubmit,control} = useForm<FormValues>()
    const onSubmit = (data: FormValues) => {

        console.log(data)

    }
    return(
        <StyledLoginForm>
            <StyledCenteredBox >
                <Flex flexDirection={'column'}>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <FormControl>
                            <FormLabel htmlFor='email'>E-Mail</FormLabel>
                            <Input type='email' id='email'  {...register("email", {required: 'Email is required'})}/>

                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <Input type='password' id='password'  {...register("password", {required: 'Password is required'})}/>
                            <Center>
                                <Button colorScheme='blue' type='submit'>Login</Button>
                            </Center>
                        </FormControl>
                    </form>
                </Flex>
            <DevTool control={control}/>
            </StyledCenteredBox>
        </StyledLoginForm>
    )
}