import Header from "@/components/header";
import "./globals.css";

import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Short Url",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Header />
        <Toaster position="top-right" richColors />

        {children}
      </body>
    </html>
  );
}
