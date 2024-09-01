import { todoArraySchema } from '../models/todo.model';

export async function fetchTodosByUser(userId: string) {
  console.log('entered fetchtodosbyuser function', userId);
  const res = await fetch(`http://localhost:3000/todos/user/${userId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch todos');
  }
  const data: { id: string; title: string; description: string }[] =
    await res.json();

  const todoArray = todoArraySchema.parse(data);
  console.log(todoArray);
  return data;
}
