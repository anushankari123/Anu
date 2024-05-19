// store.js
import create from 'zustand';

const useStore = create((set) => ({
  todos: [],
  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, todo],
    })),
  removeTodo: (todoIndex) =>
    set((state) => ({
      todos: state.todos.filter((_, index) => index !== todoIndex),
    })),
}));

export default useStore;
