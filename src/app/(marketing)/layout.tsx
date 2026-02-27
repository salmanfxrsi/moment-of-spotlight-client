import DemoModal from "../components/shared/DemoModal";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="demo-mode">
        <DemoModal />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}