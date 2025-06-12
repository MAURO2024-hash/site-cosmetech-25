import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "COSMETECH INNOVATION - Services Numériques & Formations en République Centrafricaine",
  description:
    "COSMETECH INNOVATION propose des formations en ligne, création de sites web, consulting IT, compléments alimentaires et services de nettoyage écologique COSMECLEAN en République Centrafricaine.",
  keywords:
    "formations en ligne, intelligence artificielle, sites web, République Centrafricaine, consulting IT, compléments alimentaires, nettoyage écologique",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
