import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";

export default function Navbar() {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

//Remove the "p-4" (<div className="flex items-center p-4">) because it was adding extra screen height, might need
//to be added back in the future.
