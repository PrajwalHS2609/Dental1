import Navbar from "@/Components/Navbar/Navbar";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/Components/Footer/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="./favicon.png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
