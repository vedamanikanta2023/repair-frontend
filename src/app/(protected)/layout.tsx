import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import UserDetails from "./userDetails/page";
// import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "VRepair",
  description: "Solution for Ride",
  icons: {
    icon: "/repair.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
      <div className="flex justify-end items-center" >
        <UserDetails />
        <Image src="/profile.jpg" className="rounded-full" width={30} height={30} alt="profile pic" />
      </div>
      {children}
    </div>
  );
}
