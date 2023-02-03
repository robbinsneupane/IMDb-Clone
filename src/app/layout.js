import Header from "@/Components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/*Navbar*/}
        {/*SearchBar*/}
        {children}
      </body>
    </html>
  );
}
