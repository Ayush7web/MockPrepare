import { useState, useEffect } from "react";
import { X, GraduationCap } from "lucide-react";

const MockBanner = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Optional: Automatically prevent scrolling on the background when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/60 backdrop-blur-sm animate-fade-in">
      {/* Modal Container */}
      <div className="relative w-full max-w-lg overflow-hidden bg-white rounded-2xl shadow-2xl transform transition-all animate-scale-in">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 p-1.5 text-gray-400 bg-white/80 hover:bg-gray-100 hover:text-gray-700 rounded-full transition-colors border border-gray-100"
          aria-label="Close welcome banner"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Banner Image / Illustration Area */}
        <div className="relative flex flex-col items-center justify-center h-48 bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 text-center">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          {/* Related Education Icon/Illustration */}
          <div className="relative p-4 bg-white/10 rounded-full backdrop-blur-md border border-white/20 shadow-inner mb-3">
            <GraduationCap className="w-12 h-12 text-white" />
          </div>

          <span className="text-xs font-semibold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
            Exam Prep Portal
          </span>
        </div>

        {/* Content Area */}
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Mock Prepare
            </span>
            .in
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Your ultimate destination to practice, analyze, and ace your
            upcoming examinations. Get ready to test your potential!
          </p>

          {/* Action Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-full py-3 px-6 text-white font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl shadow-lg shadow-indigo-600/20 transition-all active:scale-[0.98]"
          >
            Let's Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MockBanner;
