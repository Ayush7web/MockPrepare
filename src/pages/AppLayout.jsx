import { Outlet, useLocation } from "react-router-dom";
import MockBanner from "../components/mockBanner";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/heroBanner";
import Section from "../components/Section";
import CardServe from "../components/CardServe";

const AppLayout = () => {
  const location = useLocation();
  return (
    <>
      <MockBanner />
      <Navbar />
      {location.pathname === "/" && <HeroBanner />}
      {location.pathname === "/" && <Section />}
      {location.pathname === "/" && (
        <div className="-space-y-34 md:-space-y-34">
          <CardServe title="Free Test" buttonText="Click it" />
          <CardServe title="Payment" buttonText="Get exiciting test" />
          <CardServe title="Mock Prepare" buttonText="what can do?" />
        </div>
      )}

      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
