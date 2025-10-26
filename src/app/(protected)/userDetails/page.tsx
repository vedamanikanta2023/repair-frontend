"use client";
import { UserCard } from "@/app/components/UserCard";
import { UserDetailsUI } from "@/app/components/UserDetailsUI";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function UserDetails() {
  const { data: session, status } = useSession();
  const [userDetails, setUserDetails] = useState(null);

  const userId = session?.user.id || "";

  const fetchUserDetails = async (id: string) => {
    try {
      const response = await fetch(
        `http://10.80.221.14:5000/userdetails/${id}`,
        { cache: "no-store" } // optional, ensures fresh data
      );

      if (!response.ok) {
        // if API sends 404 or any non-200
        console.warn(`User not found, status: ${response.status}`);
        // router.push("/userDetails");
        return;
      }

      const data = await response.json();

      if (!data || Object.keys(data).length === 0) {
        // handles case when response is empty
        console.warn("User details are empty");
        return;
      }
      setUserDetails(data);
      return data;
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserDetails(userId);
    }
  }, [userId]);

  return !!userDetails ? (
    <UserCard user={userDetails} />
  ) : (
    <UserDetailsUI user={userDetails} />
  );
}
