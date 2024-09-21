import type { Metadata } from "next";
import "./globals.css";
import { Inter, IBM_Plex_Serif } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serifs",
});
export const metadata: Metadata = {
  title: "Finance Pal",
  description: "Your friendly budgeting app.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
