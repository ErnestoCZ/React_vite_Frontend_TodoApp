import { z } from 'zod';

// export interface Todo {
//   id: string;
//   title: string;
//   description?: string;
// }

const todoSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
});

export const todoArraySchema = z.array(todoSchema);

export type Todo = z.infer<typeof todoSchema>;

// const LoginCredentialsSchema = z.object({
//   email: z.string().email(),
//   password: z.string(),
// });

// export type LoginCredentials = z.infer<typeof LoginCredentialsSchema>;

export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.optional(z.string().email()),
  password: z.optional(z.string()),
});
export type User = z.infer<typeof userSchema>;
