import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const monsterrat = Montserrat({
   subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: "Ohio African Excellence Awards",
  description: "Ohio African Excellence Awards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monsterrat.className} antialiased`}
      >

        <NavBar/>
        {children}
        <Toaster position="top-center" />
        <Footer/>
      </body>
    </html>
  );
}
