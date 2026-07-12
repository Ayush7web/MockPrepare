import { Outlet, useLocation } from "react-router-dom";
import MockBanner from "../components/mockBanner";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/heroBanner";
import Section from "../components/Section";
import CardServer from "../components/CardServe";

const AppLayout = () => {
  const location = useLocation();
  return (
    <>
      <MockBanner />
      <Navbar />
      {location.pathname === "/" && <HeroBanner />}
      {location.pathname === "/" && <Section />}
      {location.pathname === "/" && <CardServer />}
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
