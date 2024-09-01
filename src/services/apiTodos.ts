export async function fetchTodosByUser(userId: string) {
  const res = await fetch(`http://localhost:3000/todos/user/${userId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch todos');
  }

  const data: { id: string; title: string; description: string }[] =
    await res.json();
  return data;
}
