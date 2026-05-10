import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adam Situ",
  description: "Personal website of Adam Situ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
