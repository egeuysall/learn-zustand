import { create } from 'zustand'

type Todo = {
  id: string
  text: string
  completed: boolean
}

type TodoState = {
  todos: Todo[]
  getCompletedCount: () => number
}

export const useTodoStore = create<TodoState>((_, get) => ({
  todos: [
    { id: '1', text: 'Learn Zustand', completed: false },
    { id: '2', text: 'Build a todo app', completed: false },
    { id: '3', text: 'Master TypeScript', completed: true },
  ],

  // Using get() to read current todos
  getCompletedCount: () => {
    const currentTodos = get().todos
    return currentTodos.filter(todo => todo.completed).length
  },
}))
