import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="text-6xl flex flex-col items-center justify-center h-screen">
      <p>Dashboard Page (Protected)</p>
      <div className="flex py-4 px-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
