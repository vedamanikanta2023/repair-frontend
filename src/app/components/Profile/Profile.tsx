import * as React from "react";
import Image from "next/image";
import { capitalizeFirstLetter } from "@/utils/utils";
const url = "http://localhost:5000/user/6";
export async function Profile() {
  const data = await fetch(url);
  const userDetails = await data.json();
  console.log("poaodsjf", userDetails);
  return (
    <>
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 shadow-md fixed right-2.5 top-2.5">
        <Image
          src="/profile.jpg"
          alt="User Profile Picture"
          width={64}
          height={64}
          className="object-cover w-full h-full"
        />
      </div>
      {true && !!userDetails && (
        <div className="flex flex-col items-start justify-center rounded-lg p-2 gap-1 text-stone-50 bg-stone-500 fixed right-6 top-20">
          <p className="text-sm font-medium text-stone-50  tracking-wide">
            {capitalizeFirstLetter(userDetails.role)}
          </p>
          <p className="text-lg font-semibold text-stone-50">
            {capitalizeFirstLetter(userDetails.username)}
          </p>
          <p className="text-sm text-stone-50">{userDetails.email}</p>
        </div>
      )}
    </>
  );
}
