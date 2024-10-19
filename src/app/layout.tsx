import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import FontAwesome styles
config.autoAddCss = false; // Prevent FontAwesome from auto-injecting CSS

// Load local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Make sure this path is correct
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff", // Make sure this path is correct
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the application
export const metadata: Metadata = {
  title: "Hose Draggers Inc. | Blog",
  description: "Generated by create next app", // You might want to customize this
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> {/* Optional: Add a favicon */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 min-h-screen flex flex-col items-center`}
      >
        {children}
      </body>
    </html>
  );
}
