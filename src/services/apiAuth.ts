import { User } from '../models/todo.model';

export async function loginRequest(email: string, password: string) {
  const res = await fetch('http://localhost:3000/users/signin', {
    headers: { 'content-type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({
      email: email.toString(),
      password: password.toString(),
    }),
  });
  if (!res.ok) {
    throw new Error('Failed to login');
  }

  const data: User = await res.json();
  console.log(data, 'extracted data from response');
  return data;
}
