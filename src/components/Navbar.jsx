import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-[60] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="blue-red font-semibold text-2xl sm:text-3xl cursor-pointer shrink min-w-0"
        >
          Mock Prepare.in
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/yourmock" className="blue-red font-semibold text-xl">
            Your Mock
          </Link>

          <Link to="/blogs" className="blue-red font-semibold text-xl">
            Blogs
          </Link>

          <Link to="/letsfun" className="blue-red font-semibold text-xl">
            Let's Fun
          </Link>

          <Link to="/login" className="blue-red font-semibold text-xl">
            Login
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-900 p-2 shrink-0"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-5 bg-white shadow-md">
          <Link to="/yourmock" onClick={() => setMenuOpen(false)}>
            Your Mock
          </Link>

          <Link to="/blogs" onClick={() => setMenuOpen(false)}>
            Blogs
          </Link>

          <Link to="/letsfun" onClick={() => setMenuOpen(false)}>
            Let's Fun
          </Link>

          <Link to="/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
