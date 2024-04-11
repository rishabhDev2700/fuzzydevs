import "./globals.css";
import { NavBar } from "./components/navbar";


export const metadata = {
  title: "Fuzzydevs",
  description: "Created with NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-raleway-medium text-gray-800">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
