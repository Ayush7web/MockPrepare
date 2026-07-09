import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
        {/* Logo For Mock Prepare */}
        <Link to="/" className="blue-red font-semibold text-3xl cursor-pointer">
          Mock Prepare.in
        </Link>
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
      
    </nav>

    
  );
};

export default Navbar;
