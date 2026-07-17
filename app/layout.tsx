import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/Preloader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/CursorGlow";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jetbrains",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashish Kumar — Portfolio",
  description:
    "Ashish Kumar — B.Tech IT student at Rajkiya Engineering College, Bijnor (AKTU). Certifications, projects and skills in C/C++, JavaScript, DSA and web development.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Ashish Kumar — Portfolio",
    description: "B.Tech IT student · certifications, projects and skills.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Preloader />
        <ScrollProgress />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
