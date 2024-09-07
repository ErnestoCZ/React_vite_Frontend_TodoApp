import { create } from 'zustand';
import { Todo } from '../models/todo.model';
import { persist, createJSONStorage } from 'zustand/middleware';

//AUTHSTORE Types & more
type AuthStore = {
  isAuthenticated: boolean;
  user: string;
  login: (userID: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: '',
      login: (userID) => {
        set(() => ({ isAuthenticated: true, user: userID }));
      },
      logout: () => {
        set(() => ({ isAuthenticated: false, user: '' }));
      },
    }),
    { name: 'AuthStorage' },
  ),
);

type JWTStore = {
  JWTToken: string | null;
  addToken: (token: string) => void;
  removeToken: () => void;
};

export const useJWTStore = create<JWTStore>()(
  persist(
    (set) => ({
      JWTToken: null,
      addToken: (token: string) => {
        set(() => ({ JWTToken: token }));
      },
      removeToken: () => {
        set(() => ({ JWTToken: null }));
      },
    }),
    { name: 'JWTStorage', storage: createJSONStorage(() => sessionStorage) },
  ),
);

// type TodoStore = {
//   todos: Todo[];
//   addTodo: (todo: Todo) => void;
//   removeTodo: (todo: Todo) => void;
// };

// export const useTodoStore = create<TodoStore>()(
//   persist(
//     (set) => ({
//       todos: [],
//       addTodo: (todo: Todo) => {
//         set((state) => ({ todos: [...state.todos, todo] }));
//       },
//       removeTodo: (todo: Todo) => {
//         set(() => ({}));
//       },
//     }),
//     { name: 'Todostorage' },
//   ),
// );
