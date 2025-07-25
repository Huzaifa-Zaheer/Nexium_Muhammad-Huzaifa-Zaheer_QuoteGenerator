"use client";
import React from "react";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };
  return (
    <button onClick={handleLogout} className="btn btn-ghost text-base-content">
      Logout
    </button>
  );
}

export default LogoutButton;
