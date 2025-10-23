"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const UserContext: any = createContext(null);

export default function Dashboard() {
  const { data: session, status } = useSession();

  const router = useRouter();

  const userId = session?.user.id || "";

  const fetchUserDetails = async (id: string) => {
    try {
      const response = await fetch(
        `${process.env.DOMAIN}/userdetails/${id}`,
        { cache: "no-store" } // optional, ensures fresh data
      );

      if (!response.ok) {
        // if API sends 404 or any non-200
        console.warn(`User not found, status: ${response.status}`);
        router.push("/userDetails");
        return;
      }

      const data = await response.json();

      if (!data || Object.keys(data).length === 0) {
        // handles case when response is empty
        console.warn("User details are empty");
        router.push("/userDetails");
        return;
      }

      return data;
    } catch (error) {
      console.error("Error fetching user details:", error);
      router.push("/userDetails");
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserDetails(userId);
    }
  }, [userId]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <UserContext.Provider value={session}>
      <div className="p-6">
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
