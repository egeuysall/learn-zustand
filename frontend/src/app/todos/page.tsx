'use client'

import { useTodoStore } from '@/stores/todoStore'

const TodoStats = () => {
  const getCompletedCount = useTodoStore((state) => state.getCompletedCount)
  const todos = useTodoStore((state) => state.todos)

  return (
    <div className="p-4">
      <p>Total todos: {todos.length}</p>
      <p>Completed: {getCompletedCount()}</p>
    </div>
  )
}

export default TodoStats
