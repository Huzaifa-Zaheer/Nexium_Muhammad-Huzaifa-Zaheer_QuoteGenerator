import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./_components/NavBar";

export const metadata: Metadata = {
  title: "Quote Generator",
  description: "A clean and minimal quote generator app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="min-h-screen bg-gray-50">
          <NavBar />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
