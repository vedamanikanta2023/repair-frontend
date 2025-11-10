"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ProfileUI } from "../ProfileUI/ProfileUI";
import { appLogoDark, appLogoLight } from "@/utils/constants";
import { useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState("light");
  const links = [
    { name: "Home", href: "/" },
    { name: "User Details", href: "/userdetails" },
  ];

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <nav className="bg-yellow-900 text-white shadow-md sticky top-0 z-50 w-full py-1 px-2 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Image
          title="Rpair"
          src={theme === "dark" ? appLogoDark : appLogoLight}
          alt="Rpair Logo"
          width={120}
          height={40}
          className="object-contain rounded-md"
        />
      </div>
      <div className="flex gap-2">
        <ul className="flex gap-4 items-center">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors duration-200 hover:text-teal-400 ${
                  pathname === link.href ? "text-teal-400" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ProfileUI />
      </div>
    </nav>
  );
};
