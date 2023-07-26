import "./globals.css";
import Navbar from "./Navbar/Navbar";

export const metadata = {
  title: "Tria Vini",
  description: "Tria Vini Wines",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
