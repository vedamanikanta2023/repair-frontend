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
    <div>
      <div className="flex justify-end items-center sticky top-0 z-50">
        <Navbar />
      </div>
      {children}
    </div>
  );
}
