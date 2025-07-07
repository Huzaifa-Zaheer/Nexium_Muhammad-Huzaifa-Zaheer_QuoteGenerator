"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
    else router.push("/login");
  }, [router]);

  if (!user) return null;

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl p-8 space-y-4">
        <h2 className="text-2xl font-bold text-primary mb-4">Profile</h2>
        <div className="space-y-2">
          <div>
            <span className="font-semibold">Name:</span> {user.name}
          </div>
          <div>
            <span className="font-semibold">Email:</span> {user.email}
          </div>
        </div>
      </div>
    </main>
  );
}
