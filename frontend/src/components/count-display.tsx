'use client'

import { useCounterStore } from '@/stores/counterStore'

export const CountDisplay = () => {
  const count = useCounterStore((state) => state.count)

  return <p className='font-semibold text-2xl'>The count is: {count}</p>
}
