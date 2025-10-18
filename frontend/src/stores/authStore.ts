// src/stores/authStore.ts
"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { itemStore } from "./itemStore";
import { AuthState } from "@/types/stores";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,

      login: (user) => set({ user }),

      logout: () => {
        set({ user: null });

        // Clear cart when logging out!
        itemStore.setState({ items: [] });
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);
