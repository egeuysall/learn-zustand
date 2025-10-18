import { create } from "zustand";
import { TodoState } from "../types/stores";

export const useTodoStore = create<TodoState>((_, get) => ({
  todos: [
    { id: "1", text: "Learn Zustand", completed: false },
    { id: "2", text: "Build a todo app", completed: false },
    { id: "3", text: "Master TypeScript", completed: true },
  ],

  // Using get() to read current todos
  getCompletedCount: () => {
    const currentTodos = get().todos;
    return currentTodos.filter((todo) => todo.completed).length;
  },
}));
