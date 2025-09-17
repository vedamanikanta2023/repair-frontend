import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
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
      <div className="rounded-full overflow-hidden">
        <Image src="/profile.jpg" width={40} height={40} alt="" />
      </div>
      {children}
    </div>
  );
}
