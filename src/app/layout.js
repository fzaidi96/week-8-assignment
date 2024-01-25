import { Inter } from "next/font/google";
import "./globals.css";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Week 8 Assignment",
  description: "Blog website",
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
