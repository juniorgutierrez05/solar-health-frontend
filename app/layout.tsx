import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Solar Health",
  description: "Sistema de salud solar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main className="p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
