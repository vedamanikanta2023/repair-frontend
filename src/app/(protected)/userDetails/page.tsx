"use client";
import { UserCard } from "@/app/components/UserCard";
import { useGetUserDetailsQuery } from "@/services/app";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function UserDetails() {
  const { data: session, status } = useSession();

  const userId = session?.user.id || "";
  const {data, error, isLoading} = useGetUserDetailsQuery(userId,{
    skip:!userId,
  });

  if (isLoading&&!!!data) {
    return <h1>...loading User Details</h1>;
  }
  return data?<UserCard user={data} />:null;
}
