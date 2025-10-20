"use client";
import * as React from "react";
import Image from "next/image";
import { capitalizeFirstLetter } from "@/utils/utils";
import { UserDetailsType } from "@/types";

const url = "https://res.cloudinary.com/dnlvhtiio/image/upload/v1760979082/main-sample.png";

export function ProfileUI(props: { userDetails: UserDetailsType }) {
  const { userDetails } = props;
  const [showUserDetails, setUserDetails] = React.useState(false);

  return (
    <>
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 shadow-md fixed right-2.5 top-2.5">
        <Image
          onMouseOver={() => setUserDetails(true)}
          onMouseLeave={() => setUserDetails(false)}
          src={url}
          alt="User Profile Picture"
          width={64}
          height={64}
          className="object-cover w-full h-full"
        />
      </div>
      {showUserDetails && userDetails && (
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
