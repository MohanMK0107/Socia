import type { Metadata } from "next";
import { Montserrat, Outfit, Poppins, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SPACE",
  description: "Your Space.Your People.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${outfit.variable} ${poppins.variable} ${inter.variable} antialiased 
        bg-[var(--background)] text-[var(--foreground)]`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
