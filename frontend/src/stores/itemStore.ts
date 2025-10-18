// src/stores/cartStore.ts
"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartState } from "@/types/stores";
import { useNotificationStore } from "./notificationStore";

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        set((state) => ({
          items: [...state.items, item],
        }));

        // Show success notification
        useNotificationStore.getState().addNotification(`${item.name} added to cart!`, "success");
      },

      removeItem: (id) => {
        const item = get().items.find((i) => i.id === id);

        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));

        // Show info notification
        if (item) {
          useNotificationStore.getState().addNotification(`${item.name} removed from cart`, "info");
        }
      },

      getTotalPrice: () => {
        const state = get();
        return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
