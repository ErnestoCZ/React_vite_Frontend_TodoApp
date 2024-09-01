import { Button, Center } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();


  function onBackButtonHandler(e: React.MouseEvent<HTMLButtonElement,MouseEvent>){
    e.preventDefault();
    navigate("/");
  }

  return (
  <Center >
    <h1>ERROR 404 Page not found.</h1>
    <Button onClick={onBackButtonHandler}>Back to Login</Button>
  </Center>
  )
}
