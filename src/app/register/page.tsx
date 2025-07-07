"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import usersData from "../_data/db.json";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const exists = (usersData as any).users.find((u: any) => u.email === email);
    if (exists) {
      setError("Email already registered");
      return;
    }
    // For demo: just store in localStorage (no real backend persistence)
    const newUser = { id: Date.now().toString(), name, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setSuccess("Registration successful! Redirecting to login...");
    setTimeout(() => router.push("/login"), 1500);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh]">
      <form
        onSubmit={handleRegister}
        className="card w-full max-w-sm bg-base-100 shadow-xl p-8 space-y-4"
      >
        <h2 className="text-2xl font-bold text-primary mb-4">Register</h2>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-error">{error}</p>}
        {success && <p className="text-success">{success}</p>}
        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>
        <p className="text-center text-sm mt-2">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </main>
  );
}
