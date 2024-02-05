import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Provider } from "@/components/Providers";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Course Forge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        montserrat.className, 'antialiased min-h-screen  dark:bg-gray-900 pt-16')}>
        <Provider>
          <Navbar />
        
          {children}
        </Provider>
        </body>
    </html>
  );
}
