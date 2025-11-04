"use client";

import { useGetUserDetailsQuery } from "@/services/app";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Dashboard() {
  const { data: session, status } = useSession();

  const userId = session?.id || "";
  const {
    data: userDetails,
    error,
  } = useGetUserDetailsQuery(userId, {
    skip: !userId,
  });
  const router = useRouter();

  const handleUserDetais = async () => {
    try {
      if (error) {
        router.push("/updateuserdetails");
        return;
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
      handleUserDetais();
  }, [userDetails,error]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;

  return (
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
  );
}
