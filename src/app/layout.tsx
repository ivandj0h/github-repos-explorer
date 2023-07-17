import './globals.css'
import React from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import FlowbiteContext from "@/context/FlowbiteContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GitHub repositories explorer',
  description: 'GitHub repositories explorer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <FlowbiteContext>{children}</FlowbiteContext>
      </body>
    </html>
  )
}
