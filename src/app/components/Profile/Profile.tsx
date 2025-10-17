import * as React from "react";
import { ProfileUI } from "../ProfileUI/ProfileUI";

const url = "http://localhost:5000/user/6";

export async function Profile() {
  const data = await fetch(url);
  const userDetails = await data.json();
  return (
    <ProfileUI userDetails={userDetails}/>
  );
}
