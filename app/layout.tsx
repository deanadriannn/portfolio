import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Navbar from "@/components/custom/navbar";
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Contact from "@/components/custom/contact";

import "./globals.css";

const font = Poppins({ 
  weight: "400",
  subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: "Dean's Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(font.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
