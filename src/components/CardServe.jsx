
import { motion } from "framer-motion";

const CardServe = ({ title, buttonText }) => {
  // Framer Motion variants text animation ke liye
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      color: "#fef08a", // Tailwind yellow-200 on hover
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className=" relative top-60 flex justify-center items-center min-h-screen bg-gray-900 p-4">
      {/* Main Card */}
      <div className="max-w-md w-full bg-gradient-to-br from-red-600 to-amber-500 rounded-2xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(239,68,68,0.3)]">
        {/* Card Content */}
        <div className="p-8 text-center flex flex-col items-center justify-center min-h-[250px]">
          {/* Framer Motion Text */}
          <motion.h2
            className="text-yellow-300 font-black text-4xl mb-4 tracking-wider cursor-pointer uppercase select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            variants={textVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            {title}
          </motion.h2>

          {/* Subtext */}
          <p className="text-white text-opacity-90 font-medium text-lg mb-6">
            Boost your skills today!
          </p>

          {/* Action Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 hover:bg-yellow-300 text-red-700 font-bold py-3 px-8 rounded-full shadow-lg transition duration-200 uppercase tracking-wide text-sm"
          >
            {buttonText}
          </motion.button>
        </div>
      </div>
      {/* +======================================================================== */}
    </div>
  );
};

export default CardServe;
