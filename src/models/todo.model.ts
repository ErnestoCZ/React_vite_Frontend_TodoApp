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
