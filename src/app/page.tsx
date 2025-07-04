import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-6">Quote Generator</h1>
      <p className="text-lg text-gray-600 mb-4 text-center">
        Welcome! This is a clean and minimal page. Add your quote generator
        here.
      </p>
    </main>
  );
}
