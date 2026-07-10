import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
        {/* Logo For Mock Prepare */}
        <Link
          to="/"
          className=" blue-red font-semibold text-3xl cursor-pointer"
        >
          Mock Prepare.in
        </Link>
        <Link
          to="/yourmock"
          className="hidden sm:block blue-red font-semibold text-xl"
        >
          Your Mock
        </Link>
        <Link
          to="/blogs"
          className=" hidden sm:block blue-red font-semibold text-xl"
        >
          Blogs
        </Link>
        <Link
          to="/letsfun"
          className=" hidden sm:block blue-red font-semibold text-xl"
        >
          Let's Fun
        </Link>
        <Link
          to="/login"
          className=" hidden sm:block blue-red font-semibold text-xl"
        >
          Login
        </Link>
      </div>

      {/* ======================================================================== */}
      {/* create Hamburger for mobile icon.. */}

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="absolute top-6 right-2"
      >
        <Menu className="block md:hidden sm:hidden" />
      </button>
      {menuOpen && (
        <div>
          <li>
            <Link to="/yourmock">Your Mock</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/letsfun">Lets fun</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
