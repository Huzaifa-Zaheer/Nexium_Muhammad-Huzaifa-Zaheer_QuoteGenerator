"use client";
import { useState, useEffect } from "react";
import quotesData from "./_data/db.json";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("user"));
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!isLoggedIn) {
      setQuotes([]);
      setError("Please login to search for quotes.");
      return;
    }
    const found = (quotesData as any).quotes.find(
      (item: any) => item.topic.toLowerCase() === topic.trim().toLowerCase()
    );
    if (found) {
      setQuotes(found.quotes.slice(0, 3));
    } else {
      setQuotes([]);
      setError("No quotes found for this topic.");
    }
  };

  return (
    <main className="w-full max-w-xl mx-auto p-8 bg-base-100 rounded-lg shadow-lg flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-6 text-primary">Quote Generator</h1>
      <form
        onSubmit={handleSearch}
        className="flex gap-2 mb-6 w-full max-w-md p-2"
      >
        <input
          type="text"
          placeholder="Enter topic (e.g. motivation)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="input input-bordered w-full px-4 py-3"
        />
        <button type="submit" className="btn btn-primary px-6 py-3">
          Show Quotes
        </button>
      </form>
      {error && <p className="text-error mb-4">{error}</p>}
      <ul className="space-y-4 w-full max-w-md">
        {quotes.map((q, i) => (
          <li key={i} className="alert alert-info text-center">
            {q}
          </li>
        ))}
      </ul>
    </main>
  );
}
