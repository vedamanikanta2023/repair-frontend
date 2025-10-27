import React from "react";
import { useRouter } from "next/navigation";

// TypeScript version of UserCard component using Tailwind CSS
// Usage: <UserCard user={user} />

interface User {
  id: number;
  name: string;
  age: number;
  phoneNumber: string;
  gender: string;
  address: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user}) => {
  const router = useRouter();
  const formatDate = (iso: string): string => {
    try {
      const d = new Date(iso);
      return d.toLocaleString();
    } catch (e) {
      return iso;
    }
  };

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
    }
  };
  
  const editUserDetails=()=>{
    router.push("/updateuserdetails?edit=true")
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
        <div className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-semibold text-lg">
              {user.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
              <p className="text-sm text-gray-500">
                User ID: <span className="font-medium text-gray-700">{user.userId}</span>
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Age</p>
              <p className="font-medium">{user.age}</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Phone</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{user.phoneNumber}</span>
                  <button
                    onClick={() => copyToClipboard(user.phoneNumber)}
                    className="px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-xs">
                    Copy
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">Gender</span>
                <span className="font-medium">{user.gender}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">Address</span>
                <span className="text-right font-medium max-w-[12rem] truncate">{user.address}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Created</span>
                <span className="font-medium">{formatDate(user.createdAt)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">Updated</span>
                <span className="font-medium">{formatDate(user.updatedAt)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">DB ID</span>
                <span className="font-medium">{user.id}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button onClick={editUserDetails} className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:opacity-95">
              Edit
            </button>
            <button className="px-4 py-2 rounded-xl bg-red-50 text-red-600 border border-red-100 hover:bg-red-100">
              Delete
            </button>
            <button
              onClick={() => copyToClipboard(JSON.stringify(user, null, 2))}
              className="ml-auto px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm">
              Export JSON
            </button>
          </div>
        </div>

        <div className="bg-gray-50 border-t border-gray-100 px-6 py-3 text-xs text-gray-500">
          <span>Profile snapshot • </span>
          <span className="font-medium">{user.name}</span>
          <span className="ml-2">• Generated UI</span>
        </div>
      </div>
    </div>
  );
};
