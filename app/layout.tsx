import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Joshua PK Kurian - IoT Developer & Software Engineer",
  description:
    "Computer Science & IoT Graduate passionate about creating innovative solutions that bridge hardware and software technologies. Experienced in IoT development, web technologies, and data analysis.",
  keywords:
    "Joshua PK Kurian, IoT Developer, Software Engineer, Computer Science, Raspberry Pi, Arduino, Web Development, Python, React, Machine Learning",
  authors: [{ name: "Joshua PK Kurian" }],
  creator: "Joshua PK Kurian",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joshuapk.dev",
    title: "Joshua PK Kurian - IoT Developer & Software Engineer",
    description: "Computer Science & IoT Graduate passionate about creating innovative solutions",
    siteName: "Joshua PK Kurian Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua PK Kurian - IoT Developer & Software Engineer",
    description: "Computer Science & IoT Graduate passionate about creating innovative solutions",
    creator: "@joshuapk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'Joshuapk186'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
