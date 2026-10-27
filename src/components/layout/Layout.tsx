import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col font-body text-neutral-dark dark:text-neutral-light bg-neutral-light dark:bg-neutral-dark">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
