import { Outlet, useLocation } from "react-router-dom";
import MockBanner from "../components/mockBanner";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/heroBanner";

const AppLayout = () => {
  const location = useLocation();
  return (
    <>
      <MockBanner />
      <Navbar />
      {location.pathname === "/" && <HeroBanner />}
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
