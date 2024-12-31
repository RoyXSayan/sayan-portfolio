// app/layout.jsx
"use client"
import { usePathname } from "next/navigation";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

// Import metadata from the server-side file
import { metadata } from "./metadata";
import { Toaster } from "react-hot-toast";
import ParticlesComponent from "@/components/particles";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={jetbrainsMono.variable}>
        <div style={{ position: "relative" }}>
          {/* Particles in the background */}
          <ParticlesComponent id="tsparticles" />

          {/* Content Wrapper */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <Header />
            <Toaster />
            <StairTransition />
            <PageTransition>{children}</PageTransition>
          </div>
        </div>
      </body>
    </html>
  );
}
