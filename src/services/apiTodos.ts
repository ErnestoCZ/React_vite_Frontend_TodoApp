import { Todo, todoArraySchema, todoSchema } from '../models/todo.model';
import { useAuthStore } from '../States/store';
import { baseAddrBackend } from './apiConstants';

const token = useAuthStore.getState().JWT;

export async function fetchTodosByUser(userId: string) {
  console.log(token, 'fetchtodosbyuser');
  const res = await fetch(`${baseAddrBackend}/todos/user/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
    method: 'GET',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch todos');
  }

  const data: { id: string; title: string; description: string }[] =
    await res.json();

  const todoArray = todoArraySchema.parse(data);
  console.log(todoArray);
  return data;
}

export async function createNewTodoByUser(
  userId: string,
  newTodo: Todo,
): Promise<Todo> {
  console.log(token);
  const res = await fetch(`${baseAddrBackend}/todos/create/${userId}`, {
    body: JSON.stringify(todoSchema.parse(newTodo)),
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to create new todo');
  }

  const data: Todo = await res.json();
  return data;
}

export async function deleteTodoByUser(todoId: string) {
  const res = await fetch(`${baseAddrBackend}/todos/${todoId}`, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'DELETE',
    body: JSON.stringify({}),
  });

  if (!res.ok) {
    throw new Error('Failed to delete todo');
  }
  const data: Todo = await res.json();
  return data;
}
