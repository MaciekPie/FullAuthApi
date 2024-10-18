import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Provider from "@/redux/provider";
//import Navbar from "@/components/common/Navbar";
//import Footer from "@/components/common/Footer";
import { Navbar, Footer } from "@/components/common"; // possible with the index.ts
import { Setup } from "@/components/utils";


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

export const metadata: Metadata = {
  title: "Full Auth",
  description: "Full Auth application that provides jwt authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Setup />
          <Navbar></Navbar>
          <div>{children}</div>
          <Footer></Footer>
        </Provider>
      </body>
    </html>
  );
}

