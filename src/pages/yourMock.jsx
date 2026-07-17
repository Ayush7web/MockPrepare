// MockTestSection.jsx

import { FaRocket, FaFlask, FaSquareRootAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Physics from "../assets/Physics.jpg";
import Chemistry from "../assets/Chemistry.jpg";
import Maths from "../assets/Maths.jpg";

const MockTestSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      {/* Heading */}

      <div className="text-center mb-14">
        <p className="blue-red mt-3 text-3xl">
          Mock Test Available For Class 10th
          <br />
          Boost Your Knowledge
        </p>
      </div>
      {/* <Outlet /> */}
      {/* Cards */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Physics */}

        <div className="relative overflow-hidden rounded-[35px] shadow-xl h-[350px] cursor-pointer transition duration-300 hover:-translate-y-2">
          {/* Background Image */}

          <img
            src={Physics}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-45"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-blue-900/20"></div>

          {/* Icon */}

          <div className="relative flex justify-center pt-8">
            <div className="h-20 w-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
              <FaRocket size={35} />
            </div>
          </div>

          {/* Text */}

          <div className="relative flex items-center justify-center h-[220px]">
            <h2 className="text-3xl font-bold text-gray-800 text-center">
              Class 10th Physics
            </h2>
          </div>
          <div className="relative flex justify-center bottom-16">
            <Link
              to="/physics"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
            >
              Start Mock
            </Link>
          </div>
        </div>

        {/* Chemistry */}

        <div className="relative overflow-hidden rounded-[35px] shadow-xl h-[350px] cursor-pointer transition duration-300 hover:-translate-y-2">
          <img
            src={Chemistry}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-45"
          />

          <div className="absolute inset-0 bg-green-900/20"></div>

          <div className="relative flex justify-center pt-8">
            <div className="h-20 w-20 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg">
              <FaFlask size={34} />
            </div>
          </div>

          <div className="relative flex items-center justify-center h-[220px]">
            <h2 className="text-3xl font-bold text-gray-800 text-center">
              Class 10th Chemistry
            </h2>
          </div>
          <div className="relative flex justify-center bottom-16">
            <Link
              to="/chemistry"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
            >
              Start Mock
            </Link>
          </div>
        </div>

        {/* Mathematics */}

        <div className="relative overflow-hidden rounded-[35px] shadow-xl h-[350px] cursor-pointer transition duration-300 hover:-translate-y-2">
          <img
            src={Maths}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-55"
          />

          <div className="absolute inset-0 bg-orange-900/20"></div>

          <div className="relative flex justify-center pt-8">
            <div className="h-20 w-20 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg">
              <FaSquareRootAlt size={34} />
            </div>
          </div>

          <div className="relative flex items-center justify-center h-[220px]">
            <h2 className="text-3xl font-bold text-gray-800 text-center">
              Class 10th Mathematics
            </h2>
          </div>
          <div className="relative flex justify-center bottom-16">
            <Link
              to="/maths"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
            >
              Start Mock
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockTestSection;
