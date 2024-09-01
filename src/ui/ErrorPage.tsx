import { Center } from '@chakra-ui/react'
import React , { useEffect, useState}from 'react'
import { useAuthStore } from '../States/store';
import { useNavigate } from 'react-router-dom';

export const ErrorPage: React.FC = () => {
  const logout = useAuthStore(state => state.logout);
  const [timer,setTimer] = useState(5);
  const navigate = useNavigate();

  setTimeout(setTimer,1000, timer-1);

  useEffect(() => {
      if(timer === 0){
      logout();
      navigate('/')
    }},[timer,navigate, logout]);

  

  return (
  <Center >
    <h1>ERROR 404 Page not found.
      Back to LoginPage in {timer}</h1>
  </Center>
  )
}
