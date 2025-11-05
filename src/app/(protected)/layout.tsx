import { Navbar } from "@/components/Navbar/Navbar";

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
    <>
        <Navbar />
      {children}
    </>
  );
}
