"use client";

import { useEffect } from "react";
import { useUserState } from "@/stores/userStore";

export default function UserForm() {
  const name = useUserState((state) => state.name);
  const age = useUserState((state) => state.age);
  const email = useUserState((state) => state.email);
  const fullInfo = useUserState((state) => state.getFullInfo);

  const setName = useUserState((state) => state.setName);
  const setAge = useUserState((state) => state.setAge);
  const setEmail = useUserState((state) => state.setEmail);

  useEffect(() => {
    useUserState.persist.rehydrate();
  }, []);

  return (
    <div className="p-4 space-y-4">
      <div>
        <label className="block mb-1">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="px-4 py-2 border rounded" />
      </div>

      <div>
        <label className="block mb-1">Age</label>
        <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="px-4 py-2 border rounded" />
      </div>

      <div>
        <label className="block mb-1">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="px-4 py-2 border rounded" />
      </div>
      <p>{fullInfo()}</p>
    </div>
  );
}
