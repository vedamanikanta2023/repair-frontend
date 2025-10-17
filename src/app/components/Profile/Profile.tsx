import * as React from "react";
import Image from "next/image";

export function Profile(){
    return <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 shadow-md fixed right-2.5 top-2.5">
            <Image
              src="/profile.jpg"
              alt="User Profile Picture"
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
}