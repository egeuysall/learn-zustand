// src/stores/notificationStore.ts
"use client";

import { create } from "zustand";

type Notification = {
  id: string;
  message: string;
  type: "success" | "error" | "info";
};

type NotificationState = {
  notifications: Notification[];
  addNotification: (message: string, type: "success" | "error" | "info") => void;
  removeNotification: (id: string) => void;
};

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],

  addNotification: (message, type) => {
    const id = crypto.randomUUID();
    const notification: Notification = { id, message, type };

    set((state) => ({
      notifications: [...state.notifications, notification],
    }));

    // Auto-remove after 3 seconds
    setTimeout(() => {
      set((state) => ({
        notifications: state.notifications.filter((n) => n.id !== id),
      }));
    }, 3000);
  },

  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
}));
