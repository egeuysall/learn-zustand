'use client'

import { useCounterStore } from '@/stores/counterStore'
import { CountDisplay } from '@/components/count-display'

export default function HomePage() {
  // Grab the data and functions from the store
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)
  const reset = useCounterStore((state) => state.reset)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-2">
      <CountDisplay />
      <div className="space-x-2">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          +
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Reset
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>
      </div>
    </div>
  )
}
