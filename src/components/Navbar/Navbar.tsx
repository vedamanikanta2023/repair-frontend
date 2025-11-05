"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Profile } from "../Profile";
import Image from "next/image";

export const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <nav className="bg-gray-800 text-white shadow-md sticky top-0 z-50 w-full py-1 px-2 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            title="Rpair"
            src="https://res.cloudinary.com/dnlvhtiio/image/upload/v1762361217/Rpair_bcwf3g.jpg"
            alt="Rpair Logo"
            width={120}
            height={40}
            className="object-contain rounded-md"
          />
        </div>

        <ul className="flex space-x-6 items-center">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors duration-200 hover:text-teal-400 ${
                  pathname === link.href ? "text-teal-400" : "text-gray-200"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}

        <Profile />
        </ul>
    </nav>
  );
};
