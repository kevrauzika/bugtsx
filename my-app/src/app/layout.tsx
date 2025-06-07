import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header"


export const metadata: Metadata = {
  title: 'Kevin foda',
  description: 'Criado por kevin',
  openGraph: {
    title: 'Kevin foda',
    description: 'Criado por kevin',
  },
  robots:
  {
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: false,
      noimageindex: true,
      notranslate: true
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
