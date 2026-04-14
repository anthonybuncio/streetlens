import type { Metadata } from "next";
import { Manrope, Bebas_Neue, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/app/_components/Footer";
import SessionProvider from "./_components/SessionProvider";
import NavBar from "./_components/NavBar";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
});

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
  return (
    <html lang="en" className={`${manrope.variable} ${bebasNeue.variable} ${ibmPlexMono.variable}`}>
      <body className={manrope.className}>
        <SessionProvider>
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
