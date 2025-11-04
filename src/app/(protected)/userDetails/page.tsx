"use client";
import { UserCard } from "@/components/UserCard";
import { useGetUserDetailsQuery } from "@/services/app";
import { useSession } from "next-auth/react";

export default function UserDetails() {
  const { data: session, status } = useSession();
  const userId = session?.user?.id || "";
  
  const {data, isLoading} = useGetUserDetailsQuery(userId,{
    skip:!userId,
  });

  if (isLoading&&!!!data) {
    return <h1>...loading User Details</h1>;
  }
  return data?<UserCard user={data} />:<h1>Details not found</h1>;
}
