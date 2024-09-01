import {FC} from 'react';
import { Todo } from '../models/todo.model';
import { FormControl, Input,Button, Flex, FormLabel } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';


interface TodoInputFormProps {
    addTodoHandler?: (newTodo: Todo) => void
}

type FormData = {
    title:string
    description:string
}

export const TodoInputForm: FC<TodoInputFormProps> = ({addTodoHandler}) => {

    const onSubmit = (data: FormData) => {
        console.log(data)
        //TODO add new task via backend => if success than add to list
        
    }
    const {control,register, handleSubmit} = useForm<FormData>()
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormControl>
                <FormLabel>Title</FormLabel>
                <Flex>

                <Input type="text" placeholder='New Todo' {...register("title",{required: "title is required"})}/>
                </Flex>
                <FormLabel>Description</FormLabel>
                <Flex>

                <Input type="text" placeholder='Description' {...register("description",{required: "description is required"})}/>
                </Flex>
                <Button type='submit'>Add new Task</Button>
                </FormControl>
            <DevTool control={control}/>
            </form>
        </div>
    )
}