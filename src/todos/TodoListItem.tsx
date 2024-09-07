import {FC, useState} from 'react';
import {Todo} from '../models/todo.model';
import { Box,Button,ButtonGroup,Flex,ListItem, Spacer, Text} from '@chakra-ui/react';
import styled from 'styled-components';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodoByUser } from '../services/apiTodos';
interface TodolistItemProps {
    item: Todo,
}
const StyledListItemBox = styled(Box)`
    width: 100%;
    background-color: wheat;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
export const TodoListItem: FC<TodolistItemProps> = ({item}) => {
    const [id] = useState<string| undefined>(item.id);
    const queryClient = useQueryClient()
    const deleteTodoMutation = useMutation({mutationFn: (todoId:string) => deleteTodoByUser(todoId), mutationKey: ['deleteTodoMutation'], onError: () => {console.log("Error on delete todo mutation")}, onSuccess: () => {queryClient.invalidateQueries({queryKey:["todosByUserId"]})}})

    function onDeleteHandler(e : React.MouseEvent<HTMLButtonElement,MouseEvent>){
        e.preventDefault();

        if(id){
            deleteTodoMutation.mutate(id)
        }
    }

    return(
        <ListItem>
                <StyledListItemBox>
                <Flex minWidth={'max-content'} gap={2}>
                    <Text fontSize={'3xl'}>{item.title}</Text>
                    {/* <Text fontSize={'xl'}>{item.description}</Text> */}
                </Flex>
                <Spacer/> 
               <ButtonGroup gap={2}>
                    {/* <Button colorScheme='gray'>Edit</Button> */}
                    <Button> Edit</Button>
                    <Button colorScheme='red' onClick={onDeleteHandler}>Delete</Button>
                </ButtonGroup>
                
                </StyledListItemBox>
        </ListItem>
    )
}
