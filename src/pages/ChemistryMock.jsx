import { useEffect, useState } from "react";
import axios from "axios";
import { CheckCircleIcon, Loader, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import confetti from "canvas-confetti";
import { Helmet } from "react-helmet-async";
// =====================================================================================

const ChemistryMock = () => {
  const [retrieveData, setRetrieveData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loader, setLoader] = useState(true);
  const [selectedOption, setSelectedOption] = useState({}); // obj form
  // const [clickedAnswer, setClickedAnswer] = useState();

  // here we use navigate , when user reached at last question then will be finish button , if click it then go to /yourmock page
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      try {
        const response = await axios.get(
          "https://mock-backend-jt3c.onrender.com/api/questions?topic=chemistry class 10th",
        );

        setRetrieveData(response.data.data);
      } catch (error) {
        console.log("mission failed", error.message);
      } finally {
        setTimeout(() => {
          setLoader(false);
        }, 100);
      }
    };

    fetchData();
  }, []);

  // handle onclick function

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev < retrieveData.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  const handleBack = () => {
    setCurrentIndex((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  // check if abswer is correct then exp. and correct answer will be display.
  const isCorrect =
    selectedOption[currentIndex] === retrieveData[currentIndex]?.correctAnswer;

  // handle Toasting style condition

  // useEffect(() => {
  //   if (
  //     selectedOption[currentIndex] === undefined ||
  //     selectedOption[currentIndex] === null
  //   ) {
  //     return;
  //   }
  //   if (
  //     selectedOption[currentIndex] === retrieveData[currentIndex]?.correctAnswer
  //   ) {
  //     toast.success(" Keep it up Bro, Kya Answer Diya hai ", {
  //       position: "top-right",
  //       autoClose: 2000,
  //       theme: "colored",
  //     });
  //   } else {
  //     toast.error("Don't Worry Bro , One More Try");
  //   }
  // }, [selectedOption, currentIndex]);

  return (
    <>
      <div className="text-center mt-7">
        {/* For Google search Interface */}
        <Helmet>
          <title>Chemistry Mock Test for Class 10th - mock-prepare</title>
          <meta
            name="Grow your Study vibe"
            content="Practice the best Chemistry mock test for class 10th. Improve your conceptual understanding for exams with mock-prepare."
          />
        </Helmet>
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h1 style={{ fontSize: "28px", color: "#333" }}>
            Chemistry Mock Test for Class 10th
          </h1>
          <p style={{ fontSize: "16px", color: "#666" }}>
            Welcome to the Class 10 Chemistry mock test series. Practice
            important questions here.
          </p>
        </div>
        <div className="font-semibold font-serif text-2xl text-blue-700">
          Sets of 15 Questions for Chemistry
        </div>
      </div>
      {loader ? (
        <div className="fixed flex z-50 inset-0 items-center justify-center bg-white/70">
          <Loader className="w-10 h-10 animate-spin" />
        </div>
      ) : (
        <div className="space-y-2.5 border p-4">
          <div>
            <p className="font-bold text-2xl">
              {retrieveData[currentIndex]?.topic}
            </p>
          </div>
          <p className="text-lg">
            Q{currentIndex + 1}. {retrieveData[currentIndex]?.questionsText}
          </p>
          {/* FOR OPTIONS  */}
          <div className="space-y-4">
            {retrieveData[currentIndex]?.options?.map((option, index) => {
              return (
                <p
                  // onClick={() => setClickedAnswer(option)}
                  onClick={() => {
                    setSelectedOption((prev) => ({
                      ...prev, // it is form of obj i.e. data save rahe.
                      [currentIndex]: option,
                    }));

                    const correctAnswer =
                      retrieveData[currentIndex]?.correctAnswer;

                    if (
                      String(option).trim() === String(correctAnswer).trim()
                    ) {
                      toast.success(" Keep it up Bro, Kya Answer Diya hai", {
                        position: "top-right",
                        autoClose: 2000,
                        theme: "colored",
                      });
                      // spray effect use for correctAnswer
                      confetti({
                        particleCount: 201,
                        spread: 81,
                        origin: { y: 0.7 },
                      });
                    } else {
                      toast.error(" Don't Worry Bro, One More Try", {
                        position: "top-right",
                        autoClose: 2000,
                        theme: "colored",
                      });
                    }
                  }} //add onclick here for correct check out answer
                  key={index}
                  className="border  w-auto p-4 rounded-2xl hover:bg-gray-300 cursor-pointer"
                >
                  {/* this is inbuild fns, provide javascript */}
                  <strong>{String.fromCharCode(65 + index)}.</strong> {option}
                  {/* Check option correct or not */}
                  {selectedOption[currentIndex] === option &&
                    retrieveData[currentIndex]?.correctAnswer === option && (
                      <CheckCircleIcon className="text-green-700" />
                    )}
                  {selectedOption[currentIndex] === option &&
                    retrieveData[currentIndex]?.correctAnswer !== option && (
                      <X className="text-red-700" />
                    )}
                </p>
              );

              // here return is needed because if you don't use return statement then it will not be rendered.
            })}
          </div>

          {/* If this will be correct then it would be show on scn DYNAMICALLY SHOW*/}
          {isCorrect && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-600 font-semibold">
                Correct Answer : {retrieveData[currentIndex]?.correctAnswer}
              </p>
              <p className="text-gray-600 text-xl">
                Explanation : {retrieveData[currentIndex]?.explanation}
              </p>
            </div>
          )}
        </div>
      )}

      <div className="flex items-center justify-center mt-6 w-full gap-10">
        {/* ⬅ Back Button */}
        <button
          onClick={handleBack}
          className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 active:scale-95 text-gray-700 font-medium text-base rounded-lg shadow-sm hover:shadow transition-all duration-200"
        >
          Back
        </button>
        {/*  Next Button */}
        <button
          onClick={handleNext}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium text-base rounded-lg shadow-sm hover:shadow transition-all duration-200"
        >
          Next
        </button>
        {/* // create a function for finish button */}
        {
          currentIndex === retrieveData.length - 1 ? (
            <button
              onClick={() => navigate("/yourmock")}
              className="px-6 py-2.5 bg-red-600 hover:bg-red-800 active:scale-95 text-white font-medium text-base rounded-lg shadow-sm hover:shadow transition-all duration-200"
            >
              Finish
            </button>
          ) : null // if you want not write in else part , then you put it in null
        }
      </div>

      <ToastContainer />
    </>
  );
};

export default ChemistryMock;
