import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/app/_components/Footer";
import { useEffect } from "react";
import { getServerSession } from "next-auth";
import SessionProvider from "./_components/SessionProvider";
import NavBar from "./_components/NavBar";

const myFont = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Houston - StreetLens: Dashcam Uploader",
  description: "Street Lens Description",
  icons: {
    icon: "icon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={myFont.className}>
        <SessionProvider session={session}>
          <main>
            <NavBar />
            {children}
            <Footer />
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
