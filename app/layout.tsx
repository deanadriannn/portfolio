import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Navbar from "@/components/custom/navbar";

import "./globals.css";

const font = Poppins({ 
  weight: "400",
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: "Dean's Portfolio",
  description: "Personal Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <main className="md:px-5 lg:px-36 xl:px-52 2xl:px-72">
          {children}
        </main>
      </body>
    </html>
  )
}
