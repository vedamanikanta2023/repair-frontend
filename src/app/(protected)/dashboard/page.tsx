"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const UserContext: any = createContext(null);

export default function Dashboard() {
  const { data: session, status } = useSession();
    const [count, setCount] = useState(0);

  const router = useRouter();
  console.log("d;",session);
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <UserContext.Provider value={session}>
      <div className="p-6">
        <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        {/* <p className="mt-2">Welcome, {session?.user?.username} 🎉</p> */}
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
        <button>Do Request</button>
      </div>
    </UserContext.Provider>
  );
}
