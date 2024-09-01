import { create } from 'zustand';
import { Todo } from '../models/todo.model';

//AUTHSTORE Types & more
type AuthStore = {
  isAuthenticated: boolean;
  user: string;
  login: (userID: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  user: '',
  login: (userID) => {
    set(() => ({ isAuthenticated: true, user: userID }));
  },
  logout: () => {
    set(() => ({ isAuthenticated: false, user: '' }));
  },
}));

type TodoStore = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo: Todo) => {
    set((state) => ({ todos: [...state.todos, todo] }));
  },
  removeTodo: (todo: Todo) => {
    set(() => ({}));
  },
}));
