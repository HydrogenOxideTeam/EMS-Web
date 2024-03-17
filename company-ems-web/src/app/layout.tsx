import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HydrogenOxide EMS",
  description: "Description lorem ipsum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={"flex flex-col min-h-screen"}>
      <Navbar/>
      <main className={"flex-1 pt-[90px]"}>
          {children}
      </main>
      <Footer/>
    </body>
    </html>
  );
}
