"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import usersData from "../_data/db.json";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const user = (usersData as any).users.find(
      (u: any) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh]">
      <form
        onSubmit={handleLogin}
        className="card w-full max-w-sm bg-base-100 shadow-xl p-8 space-y-4"
      >
        <h2 className="text-2xl font-bold text-primary mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full px-4 py-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full px-4 py-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-error">{error}</p>}
        <button type="submit" className="btn btn-primary w-full px-4 py-3">
          Login
        </button>
        <p className="text-center text-sm mt-2">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </form>
    </main>
  );
}
