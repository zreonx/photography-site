import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//Import Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//Toast
import { Toaster } from "@/components/ui/toaster";

//ThemeProvider
import ThemeProvider from "@/context/ThemeProvider";

//Font
import { Sen } from "next/font/google";

const SenFont = Sen({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photography",
  description: "Photography application created with next js typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={SenFont.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
