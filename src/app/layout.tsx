import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StarknetProvider } from "@/components/starknet-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Told Ya",
  description: "Publish and sell predictions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StarknetProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            {children}
        </body>
      </StarknetProvider>
    </html>
  );
}
