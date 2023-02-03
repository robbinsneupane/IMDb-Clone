import Header from "@/Components/Header";
import "./globals.css";
import Provider from "./Provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          {/*Navbar*/}
          {/*SearchBar*/}
          {children}
        </Provider>
      </body>
    </html>
  );
}
