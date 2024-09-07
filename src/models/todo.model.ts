import { z } from 'zod';

// export interface Todo {
//   id: string;
//   title: string;
//   description?: string;
// }

export const todoSchema = z.object({
  id: z.optional(z.string().uuid()),
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

export const signinResponseSchema = z.object({
  JWT: z.string(),
});

export type SignInResponse = z.infer<typeof signinResponseSchema>;

export const JWTTokenSchema = z.object({
  id: z.string(),
  iat: z.number(),
  exp: z.number(),
});
export type JWTToken = z.infer<typeof JWTTokenSchema>;
