import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trail Stories",
  description: "Guided storytelling for responsible hiking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <main className="max-w-md mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
