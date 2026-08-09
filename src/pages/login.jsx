// // LoginPage.jsx
// // import { useState } from "react";
// import { FiPhone, FiArrowRight, FiCheckCircle } from "react-icons/fi";
// // import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// // import { auth } from "../utils/firebaseConfig";
// // import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   window.scrollTo(0, 0); // start from top page
//   // const [phone, setPhone] = useState("");
//   // otp come on bundle addociated with token.
//   // const [confirmationResult, setConfirmationResult] = useState(null);
//   // const [otp, setOtp] = useState("");
//   // const [loading, setLoading] = useState(false);

//   // const navigate = useNavigate();

//   // const sendOtpFunction = async () => {
//   //   // Firebase ko chahiye ek Recaptcha (Robot check) jo hum handle karenge
//   //   try {
//   //     const appVerifier = new RecaptchaVerifier(
//   //       auth,
//   //       "recaptcha-container",
//   //       {}, // default jo firebase ka jo ui hai captcha ka vahi rahega
//   //     );
//   //     //  Firebase ka main function jo SMS bhejega
//   //     const phoneNumber = `+91${phone}`;

//   //     const result = await signInWithPhoneNumber(
//   //       auth,
//   //       phoneNumber,
//   //       appVerifier,
//   //     );

//   //     // State ka asli use: Receipt ko memory me save kar liya
//   //     setConfirmationResult(result);
//   //     console.log("OTP sent successfully");
//   //   } catch (error) {
//   //     console.log("Otp not found", error.message);
//   //   }
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   if (phone.length !== 10) {
//   //     alert("Please enter a valid 10-digit mobile number.");
//   //     return;
//   //   }
//   //   await sendOtpFunction();
//   // };

//   // verify otp

//   // const verifyOtpFunction = async (e) => {
//   //   e.preventDefault(); // ye react ke whole state ko render hone se save karta hai
//   //   // 1. Check karna ki kya hamare paas receipt (confirmationResult) hai
//   //   setLoading(true);
//   //   try {
//   //     if (!confirmationResult) {
//   //       alert("send the OTP");
//   //       return;
//   //     }

//       // 2. Receipt ye check karega ki user ka dala hua OTP verify hua ya nahi
//       // const userCredential = await confirmationResult.confirm(otp);

//       // const redirectPath = location.state?.form || "/yourmock";
//       // navigate(redirectPath);

//       // 3. Agar OTP sahi hai, toh user ka poora data mil jayega

//   //     const user = userCredential.user;
//   //     // console.log("Login successfully", user.uid);
//   //     alert("Waah, Login successfully");
//   //   } catch (error) {
//   //     console.log("Not verified", error.message);
//   //     alert("Wrong Otp , please tgry again");
//   //   } finally {
//   //     setLoading(false); // Loading spinner band karne ke liye
//   //   }
//   // };

//   // ===============================================================================

//   return (
//     <>
//       <div>
//         {/* Top Banner Alert */}
//         <div className="text-2xl md:text-3xl text-red-500 text-center font-semibold mt-5 mb-5 ">
//           This Login Section is Now Working Right now, But you can access your
//           free test in one click on Your Mock. <span>Thankyou</span>
//         </div>

//         <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-500 to-amber-700 flex items-center justify-center px-5">
//           {/* Background Blur Elements */}
//           <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl"></div>

//           {/* Main Card */}
//           <div className="relative w-full max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-8">
//             {/* Logo */}
//             <div className="flex justify-center mb-6">
//               <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center shadow-lg">
//                 <span className="text-3xl font-bold text-orange-600">M</span>
//               </div>
//             </div>

//             {/* Heading */}
//             <h1 className="text-3xl font-bold text-center text-white">
//               Welcome Back
//             </h1>
//             <p className="text-orange-100 text-center mt-2">
//               Login to continue your learning journey.
//             </p>

//             {/* Invisible Recaptcha Container */}
//             <div id="recaptcha-container"></div>

//             {/* Conditional Rendering: Agar OTP nahi bheja toh Number input dikhao, agar bhej diya toh OTP input dikhao */}
//             {!confirmationResult ? (
//               /* =================== FORM 1: MOBILE NUMBER INPUT =================== */
//               <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//                 <div>
//                   <label className="block text-sm text-orange-100 mb-2">
//                     Mobile Number
//                   </label>
//                   <div className="flex items-center rounded-xl border border-white/20 bg-white/20 overflow-hidden">
//                     <div className="px-4 py-4 text-white font-semibold border-r border-white/20">
//                       🇮🇳 +91
//                     </div>
//                     <div className="flex items-center flex-1 px-3">
//                       <FiPhone className="text-white mr-2 text-lg" />
//                       <input
//                         type="tel"
//                         maxLength={10}
//                         placeholder="Enter 10 digit number"
//                         value={phone}
//                         onChange={(e) =>
//                           setPhone(e.target.value.replace(/\D/g, ""))
//                         }
//                         className="w-full bg-transparent outline-none text-white placeholder:text-orange-100 py-4"
//                         required
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="group w-full flex items-center justify-center gap-2 rounded-xl bg-white text-orange-600 font-semibold py-4 transition duration-300 hover:scale-[1.02] hover:bg-orange-50 disabled:opacity-50"
//                 >
//                   {loading ? "Sending..." : "Continue"}
//                   <FiArrowRight className="transition group-hover:translate-x-1" />
//                 </button>
//               </form>
//             ) : (
//               /* =================== FORM 2: OTP VERIFICATION INPUT =================== */
//               <form onSubmit={verifyOtpFunction} className="mt-8 space-y-6">
//                 <div>
//                   <label className="block text-sm text-orange-100 mb-2">
//                     Enter 6-Digit OTP
//                   </label>
//                   <div className="flex items-center rounded-xl border border-white/20 bg-white/20 overflow-hidden">
//                     <div className="flex items-center flex-1 px-4">
//                       <FiCheckCircle className="text-white mr-2 text-lg" />
//                       <input
//                         type="text"
//                         maxLength={6}
//                         placeholder="X X X X X X"
//                         // value={otp}
//                         onChange={(e) =>
//                           (e.target.value.replace(/\D/g, ""))
//                         }
//                         className="w-full bg-transparent outline-none text-white tracking-[0.5em] text-center font-bold placeholder:text-orange-100 py-4 placeholder:tracking-normal"
//                         required
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="group w-full flex items-center justify-center gap-2 rounded-xl bg-green-500 text-white font-semibold py-4 transition duration-300 hover:scale-[1.02] hover:bg-green-600 disabled:opacity-50"
//                 >
//                   {loading ? "Verifying..." : "Verify & Login"}
//                   <FiArrowRight className="transition group-hover:translate-x-1" />
//                 </button>

//                 <p
//                   onClick={() => setConfirmationResult(null)}
//                   className="text-center text-xs text-orange-200 cursor-pointer underline hover:text-white"
//                 >
//                   Change Phone Number
//                 </p>
//               </form>
//             )}

//             {/* Divider */}
//             <div className="flex items-center my-8">
//               <div className="flex-1 h-px bg-white/20"></div>
//               <span className="px-4 text-orange-100 text-sm">Secure Login</span>
//               <div className="flex-1 h-px bg-white/20"></div>
//             </div>

//             {/* Footer */}
//             <p className="text-center text-sm text-orange-100 leading-6">
//               By continuing, you agree to our{" "}
//               <span className="font-semibold text-white">
//                 Terms & Conditions
//               </span>{" "}
//               and{" "}
//               <span className="font-semibold text-white">Privacy Policy</span>.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginPage;

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Login</h1>

          <p className="text-gray-500 mt-2">
           
           This Login page is Not working yet , but you still give your Mock Test
           So, Go Ahead, continue your Learning with Mock Prepare
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-orange-600 hover:text-orange-700"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?
          <span className="text-orange-600 font-semibold ml-1 cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;