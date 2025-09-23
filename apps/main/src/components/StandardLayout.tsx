import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function StandardLayout() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-neutral-950 dark:text-gray-100 selection:bg-blue-500/20 selection:text-blue-700 dark:selection:bg-blue-400/20 dark:selection:text-blue-200 antialiased">
      <Header />
      <div className="min-h-screen pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
