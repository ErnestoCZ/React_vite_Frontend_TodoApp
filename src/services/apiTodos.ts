import { Todo, todoArraySchema, todoSchema } from '../models/todo.model';
import { baseAddrBackend } from './apiConstants';

export async function fetchTodosByUser(userId: string) {
  const res = await fetch(`${baseAddrBackend}/todos/user/${userId}`);
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
  const res = await fetch(`${baseAddrBackend}/todos/create/${userId}`, {
    body: JSON.stringify(todoSchema.parse(newTodo)),
    method: 'POST',
    headers: { 'content-type': 'application/json' },
  });

  if (!res.ok) {
    throw new Error('Failed to create new todo');
  }

  const data: Todo = await res.json();
  return data;
}

export async function deleteTodoByUser(todoId: string) {
  const res = await fetch(`${baseAddrBackend}/todos/${todoId}`, {
    headers: { 'content-type': 'application/json' },
    method: 'DELETE',
    body: JSON.stringify({}),
  });

  if (!res.ok) {
    throw new Error('Failed to delete todo');
  }
  const data: Todo = await res.json();
  return data;
}
