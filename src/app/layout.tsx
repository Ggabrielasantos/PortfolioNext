import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar"; 

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Desenvolvido com Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="bg-gray-100">
        <Navbar /> {}
        {children}
      </body>
    </html>
  );
}
