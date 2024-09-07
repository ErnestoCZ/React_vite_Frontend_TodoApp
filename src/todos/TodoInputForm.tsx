import {FC} from 'react';
import { Todo } from '../models/todo.model';
import { FormControl, Input,Button, Flex, FormLabel, Spinner } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useAuthStore } from '../States/store';
import {useQueryClient } from '@tanstack/react-query';
import {useMutation} from '@tanstack/react-query';
import { createNewTodoByUser } from '../services/apiTodos';
interface TodoInputFormProps {
    addTodoHandler?: (newTodo: Todo) => void
}

type FormData = {
    title:string
    description:string
}

export const TodoInputForm: FC<TodoInputFormProps> = () => {
    const userId = useAuthStore(state => state.user);
    const isAuthenticated = useAuthStore(state =>state.isAuthenticated);
    const queryClient = useQueryClient()
    const mutation = useMutation({mutationFn: (newTodo:Todo) => createNewTodoByUser(userId,newTodo),mutationKey: ["createNewTodoByUserMutation"], onSuccess: ()=> queryClient.invalidateQueries({queryKey:["todosByUserId"]}), onError: () => console.log("Error in Mutation")})

    const onSubmit = async (data: FormData) => {
        console.log(data)
        if(isAuthenticated){
            mutation.mutate(data);
        }
    }
    const {control,register, handleSubmit} = useForm<FormData>()
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormControl>
                <Flex direction={'column'}>
                    <FormLabel>Title</FormLabel>
                    <Input type="text" placeholder='New Todo' {...register("title",{required: "title is required"})}/>
                    <FormLabel>Description</FormLabel>
                    <Input type="text" placeholder='Description' {...register("description",{required: "description is required"})}/>
                    
                    <Flex flexDirection={'row'}>
                    <Button type='submit'>Add new Task {mutation.isPending ? (<Spinner/>) : null}</Button>
                    </Flex>
                </Flex>
                </FormControl>
            <DevTool control={control}/>
            </form>
        </div>
    )
}