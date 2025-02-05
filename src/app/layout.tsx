import "@/app/globals.css"
import type { Metadata } from "next";
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/hero/site-hero"
import type React from "react" // Added import for React  
import { SiteFooter } from "@/components/footer/footer"
import Container from "@/components/responsive";


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kapil Dev Sapkota",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
        <SiteHeader />
        {children}
        <SiteFooter />
        </Container>
      </body>
    </html>
  )
}