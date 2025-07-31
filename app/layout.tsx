import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./language-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ANFAIA",
  description: "Driving Progress with Artificial Intelligence",
  openGraph: {
    title: "ANFAIA",
    description: "Driving Progress with Artificial Intelligence",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
