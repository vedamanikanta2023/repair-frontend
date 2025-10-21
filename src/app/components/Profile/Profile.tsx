import * as React from "react";
import { ProfileUI } from "../ProfileUI/ProfileUI";
import { UserDetailsType } from "@/types";

const url = `${process.env.DOMAIN}/user/6`;

export async function Profile() {
  const data = await fetch(url);
  const userDetails : UserDetailsType = await data.json();
  return (
    <ProfileUI userDetails={userDetails}/>
  );
}
