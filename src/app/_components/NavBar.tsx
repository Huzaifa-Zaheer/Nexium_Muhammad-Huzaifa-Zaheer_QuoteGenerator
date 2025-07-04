import Link from "next/link";
import React from "react";
import LogoutButton from "./LogutButton";

const NavBar = () => {
  const session = false;
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-800">
          Quote Generator
        </Link>
        <div className="flex items-center space-x-3 p-5"> 
          {session ? (
            <>
              <Link href="/qoutes" className="text-gray-700 hover:text-blue-600">
                Quotes
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-900 hover:text-blue-600">
                Login
              </Link>
              <Link
                href="/register"
                className="text-gray-900 hover:text-blue-600"
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
