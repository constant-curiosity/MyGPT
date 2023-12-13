import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <div className="text-6xl flex flex-col items-center justify-center h-screen">
        Landing Page
        <div className="flex">
          <div className="mr-2">
            <Link href={"/sign-in"}>
              <Button className="bg-blue-500 text-white px-4 py-2 rounded">
                Login
              </Button>
            </Link>
          </div>

          <div>
            <Link href={"/sign-up"}>
              <Button className="bg-blue-500 text-white px-4 py-2 rounded">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
