'use client'

import { create } from 'zustand'

type CounterState = {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

// This is your store - it holds a number and functions to change it
export const useCounterStore = create<CounterState>((set) => ({
  // The data
  count: 0,

  // Functions to change the data
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))
