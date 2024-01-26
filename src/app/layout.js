import { Inter } from "next/font/google";
import "./globals.css";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | silly goose",
  description: "week 8 assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageHeader />
        {children}
        <PageFooter />
      </body>
    </html>
  );
}
