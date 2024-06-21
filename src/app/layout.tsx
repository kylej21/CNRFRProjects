import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react"
export const metadata: Metadata = {
  title: "Codeninjas Projects",
  description: "Display page for all camp projects at Codeninjas Folom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar/>
        {children}
        <Analytics />
        </body>
    </html>
  );
}
