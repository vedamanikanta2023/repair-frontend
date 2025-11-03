import * as React from "react";
import { ProfileUI } from "../ProfileUI/ProfileUI";
import { UserDetailsType } from "@/types";

const url = `${process.env.NEXT_PUBLIC_BASE_DOMAIN}/user/6`;

export async function Profile() {
  try {
    const res = await fetch(url, { cache: "no-store" }); // prevents stale data

    if (!res.ok) {
      throw new Error(`Failed to fetch user details: ${res.statusText}`);
    }

    const userDetails: UserDetailsType = await res.json();

    return <ProfileUI userDetails={userDetails} />;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return (
      <div className="text-red-500 p-4">
        Failed to load user details. Please try again later.
      </div>
    );
  }
}
