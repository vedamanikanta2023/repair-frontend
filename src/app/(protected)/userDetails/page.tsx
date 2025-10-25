"use client"
import { UserDetailsUI } from "@/app/components/UserDetailsUI";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function UserDetails() {
  const { data: session, status } = useSession();
  console.log(session);
  const fetchUserDetails = async (id: string) => {
    try {
      const response = await fetch(
        `${process.env.DOMAIN}/userdetails/${id}`,
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

      return data;
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails("");
  }, []);

  return <UserDetailsUI />;
}
