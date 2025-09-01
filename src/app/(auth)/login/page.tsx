"use client"
import { Login } from "@/app/components/Login";
import { Regester } from "@/app/components/Regester";
import { useState } from "react";


export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"register" | "login">("register");

  return (
    <div className="max-w-md mx-auto mt-10">
      {/* Tabs */}
      <div className="flex justify-around mb-4 border-b">
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "register"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("register")}
        >
          Register
        </button>
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "login"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
      </div>

      {/* Render forms */}
      {activeTab === "register" ? <Regester /> : <Login />}
    </div>
  );
};
