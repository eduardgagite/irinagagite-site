import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Playfair_Display } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
})

export const metadata = {
  title: "Irina Gagite - Soprano",
  description: "Official website of Irina Gagite, internationally acclaimed soprano",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

