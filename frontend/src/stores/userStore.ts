"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserState } from "../types/stores";

export const useUserState = create<UserState>()(
  persist(
    (set, get) => ({
      name: "",
      age: 0,
      email: "",
      isOnline: false,

      setName: (name: string) => set({ name }),
      setAge: (age: number) => set({ age }),
      setEmail: (email: string) => set({ email }),
      setIsOnline: (isOnline: boolean) => set({ isOnline }),
      getFullInfo: () => {
        const { name, age, email, isOnline } = get();

        const userName = name || "unknown";
        const userAge = age === 0 ? "unknown" : age;
        const userEmail = email || "unknown";
        const userStatus = isOnline ? "online" : "offline";
        const fullInfo = `The user's name is ${userName}, age is ${userAge}, email is ${userEmail}, and they are ${userStatus}.`;

        return fullInfo;
      },
    }),
    {
      name: "user-storage",
      skipHydration: true,
    },
  ),
);
