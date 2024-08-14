import {FC} from 'react';
import {Todo} from '../models/todo.model';
import { Box,Button,ListItem } from '@chakra-ui/react';
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
    
`
export const TodoListItem: FC<TodolistItemProps> = ({item}) => {
    return(
        <ListItem>
            <StyledListItemBox>
                {item.title}
                <Button colorScheme='red'>Delete</Button>
            </StyledListItemBox>
        </ListItem>
    )
}
