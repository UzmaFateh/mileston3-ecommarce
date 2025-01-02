import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { satoshi } from "@/styles/fonts";
import HolyLoader from "holy-loader";
import Providers from "./providers";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Shopco",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <HolyLoader color="#868686" />
        {/* <TopBanner /> */}
        <Providers> 
          {/* <TopNavbar /> */}
          <Navbar />
          {children}
        </Providers>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
