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
    <html lang="en" style={{ colorScheme: "light" }}>
      {/* Inline baseline so the page stays readable if the CSS file fails to load (cache, network, preview tools). */}
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          backgroundColor: "#fffcf2",
          color: "#111827",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
