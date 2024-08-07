import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "My Blog App",
  description: "MySQL Blog-App",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen">
          <Navbar />
          <div className="w-full lg:w-[80%] p-4 mx-auto">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
