import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center p-4">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

//Remove the "p-4" (<div className="flex items-center p-4">) because it was adding extra screen height, might need
//to be added back in the future.
