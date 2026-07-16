// LoginPage.jsx

import { useState } from "react";
import { FiPhone, FiArrowRight } from "react-icons/fi";

const LoginPage = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    console.log("+91" + phone);

    // Navigate to OTP page or call your API here
    // navigate("/verify-otp")
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-amber-700 flex items-center justify-center px-5">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl"></div>

      {/* Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center shadow-lg">
            <span className="text-3xl font-bold text-orange-600">M</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-white">
          Welcome Back
        </h1>

        <p className="text-orange-100 text-center mt-2">
          Login to continue your learning journey.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm text-orange-100 mb-2">
              Mobile Number
            </label>

            <div className="flex items-center rounded-xl border border-white/20 bg-white/20 overflow-hidden">
              {/* Country Code */}
              <div className="px-4 py-4 text-white font-semibold border-r border-white/20">
                🇮🇳 +91
              </div>

              {/* Input */}
              <div className="flex items-center flex-1 px-3">
                <FiPhone className="text-white mr-2 text-lg" />

                <input
                  type="tel"
                  maxLength={10}
                  placeholder="Enter 10 digit number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  className="w-full bg-transparent outline-none text-white placeholder:text-orange-100 py-4"
                />
              </div>
            </div>
          </div>

          {/* Button */}

          <button
            type="submit"
            className="group w-full flex items-center justify-center gap-2 rounded-xl bg-white text-orange-600 font-semibold py-4 transition duration-300 hover:scale-[1.02] hover:bg-orange-50"
          >
            Continue
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </button>
        </form>

        {/* Divider */}

        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-white/20"></div>

          <span className="px-4 text-orange-100 text-sm">Secure Login</span>

          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        {/* Footer */}

        <p className="text-center text-sm text-orange-100 leading-6">
          By continuing, you agree to our
          <span className="font-semibold text-white">
            {" "}
            Terms & Conditions
          </span>{" "}
          and <span className="font-semibold text-white">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
