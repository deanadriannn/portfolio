import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Navbar from "@/components/custom/navbar";
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

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
    <html lang="en">
      <body className={cn(font.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <Navbar />
          <main className="mobile:px-3 tablet:px-36 laptop:px-64 desktop:px-96">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
