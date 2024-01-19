import type { Metadata } from "next";
import { Lexend, Poppins } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Atomic - Periodic Table App",
  description:
    "Explore the elements with Atomic, your interactive periodic table app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-atomic">
      <body className={`${lexend.className} max-w-[100rem] mx-auto`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
