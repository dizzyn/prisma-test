"use client";

import { useRouter } from "next/navigation";
import { addUser } from "./actions";

export default () => {
  const router = useRouter();

  return (
    <>
      <button
        onClick={async () => {
          const user = await addUser("Jana");
          console.log(user);
          router.refresh();
        }}
      >
        Add New User JANA
      </button>
    </>
  );
};
