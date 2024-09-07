import { User } from '../models/todo.model';
import { baseAddrBackend } from './apiConstants';

export async function loginRequest(email: string, password: string) {
  const res: Response = await fetch(`${baseAddrBackend}/users/signin`, {
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

  console.log(res.headers.get('set-cookies'));
  const data: User = await res.json();

  return data;
}

export async function logoutRequest() {
  const res = await fetch(`${baseAddrBackend}/users/signout`, {
    headers: { 'content-type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({}),
  });
  console.log(res);

  if (!res.ok) {
    throw new Error('Failed to signout');
  }

  // const data = await res.json();
  // console.log(data);
  return res;
}
