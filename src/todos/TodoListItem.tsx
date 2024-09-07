import {FC} from 'react';
import {Todo} from '../models/todo.model';
import { Box,Button,ButtonGroup,Flex,ListItem, Spacer, Text} from '@chakra-ui/react';
import styled from 'styled-components';
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
                    <Button colorScheme='red'>Delete</Button>
                </ButtonGroup>
                
                </StyledListItemBox>
        </ListItem>
    )
}
