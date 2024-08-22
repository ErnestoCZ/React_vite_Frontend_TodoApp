import {FC} from 'react';
import {Todo} from '../models/todo.model';
import { Box,Button,ButtonGroup,Flex,ListItem, Spacer } from '@chakra-ui/react';
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
            <Flex alignItems={'center'}>
                <StyledListItemBox>
                    {item.title}

                <ButtonGroup gap={4}>
                    <Button colorScheme='gray'>Edit</Button>
                    <Button colorScheme='red'>Delete</Button>
                </ButtonGroup>
                <Spacer/>
                </StyledListItemBox>

            </Flex>
        </ListItem>
    )
}
