import { Suspense } from "react";
import { UpdateUserDetails } from "@/components/UpdateUserDetails";

export default function UpdateUserDetailsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdateUserDetails />
    </Suspense>
  );
}
