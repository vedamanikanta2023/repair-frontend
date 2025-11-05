"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Profile } from "../Profile";

export const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <nav className="bg-gray-800 text-white shadow-md w-dvw">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between mr-16">
        <h1 className="text-xl font-semibold tracking-wide">MyApp</h1>

        <ul className="flex space-x-6">
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
        </ul>
      </div>
      <Profile />
    </nav>
  );
};
