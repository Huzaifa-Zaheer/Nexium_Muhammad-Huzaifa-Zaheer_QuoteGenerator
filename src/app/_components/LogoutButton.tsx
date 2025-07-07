"use client";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };
  return (
    <button onClick={handleLogout} className="btn btn-ghost text-base-content">
      Log Out
    </button>
  );
};

export default LogoutButton;
