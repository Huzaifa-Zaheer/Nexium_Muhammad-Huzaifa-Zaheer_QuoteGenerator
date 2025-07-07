"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LogoutButton from "./LogoutButton";

const NavBar = () => {
  const [session, setSession] = useState(false);
  useEffect(() => {
    setSession(!!localStorage.getItem("user"));
  }, []);

  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="container mx-auto flex justify-between items-center w-full">
        <Link href="/" className="text-2xl font-bold text-primary">
          Quote Generator
        </Link>
        <div className="flex items-center space-x-3">
          {session ? (
            <LogoutButton />
          ) : (
            <>
              <Link href="/login" className="btn btn-ghost text-base-content">
                Login
              </Link>
              <Link
                href="/register"
                className="btn btn-ghost text-base-content"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
