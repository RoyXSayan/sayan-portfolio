"use client";
import { useEffect, useState } from "react";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { metadata } from "./metadata";
import useFirstLoad from "@/hooks/useFirstLoad";
import WelcomeTransition from "@/components/WelcomeTransition";
import ReloadTransition from "@/components/FuturisticStairReload";
import FuturisticTransition from "@/components/FuturisticTransition";
import ParticlesComponent from "@/components/particles";
import { Toaster } from "react-hot-toast";
import CustomCursor from "@/components/CustomCursor";
import HighlightCursor from "@/components/HighlightCursor";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrainsMono",
});

export default function RootLayout({ children }) {
  const isFirstLoad = useFirstLoad();
  const [showWelcome, setShowWelcome] = useState(isFirstLoad);
  const [showReloadTransition, setShowReloadTransition] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowReloadTransition(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={jetbrainsMono.variable}>
        {/* <CustomCursor/> */}
        <HighlightCursor />
        {showWelcome ? (
          <WelcomeTransition onComplete={() => setShowWelcome(false)} />
        ) : (
          <>
            {showReloadTransition && (
              <ReloadTransition
                onComplete={() => setShowReloadTransition(false)}
              />
            )}
            {!showReloadTransition && (
              <div className="relative z-0">
                <ParticlesComponent />
                <Header />
                <Toaster />
                <FuturisticTransition>{children}</FuturisticTransition>
                <Footer />
              </div>
            )}
          </>
        )}
      </body>
    </html>
  );
}
