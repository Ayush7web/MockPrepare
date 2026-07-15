const letsFun = () => {
  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-transparent px-4 text-center">
      <div className="space-y-4 max-w-2xl">
        {/* Small Tagline */}
        <p className="text-xl font-semibold uppercase tracking-widest text-gray-400">
         Let's Fun
        </p>

        {/* Main Heading with Modern Gradient */}
        <h1 className="bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl">
          Coming Soon
        </h1>

        {/* Description / Subtext */}
        <p className="mx-auto max-w-md text-base text-gray-500 sm:text-lg">
          We are brewing fresh stories and expert insights. Stay tuned,
          something exciting is on its way!
        </p>

        {/* Elegant Back to Home Button */}
        <div className="pt-4">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-red-600/20 transition-all hover:bg-red-700 hover:shadow-red-700/30 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default letsFun;
