import "./globals.css";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

export const metadata = {
  title: "OinUsideT",
  description: "Health, Wellness, Nutrition, Fitness, Mental Health",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body text-textPrimary bg-white">
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
