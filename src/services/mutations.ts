import { useMutation } from '@tanstack/react-query';
import { createNewTodoByUser } from './apiTodos';
import { Todo } from '../models/todo.model';

export function useCreateTodo() {
  return useMutation({
    mutationFn: (userId: string, data: Todo): Promise<Todo> =>
      createNewTodoByUser(userId, data),
    mutationKey: ['createNewTodoByUserMutation'],
    onMutate: () => {
      console.log('Mutation');
    },
    onError: () => {
      console.log('Error');
    },
    onSuccess: () => {
      console.log('Success');
    },
  });
}
