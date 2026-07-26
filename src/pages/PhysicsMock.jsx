import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "lucide-react";

const PhysicsMock = () => {
  const [retrieveData, setRetrieveData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      try {
        const response = await axios.get(
          "http://localhost:5000/api/questions?topic=physics class 10th",
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

  return (
    <>
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
          <div className="space-y-1">
            {retrieveData[currentIndex]?.options?.map((option, index) => {
              return (
                <p key={index}>
                  {/* this is inbuild fns, provide javascript */}
                  <strong>{String.fromCharCode(65 + index)}.</strong> {option}
                </p>
              );
              // here return is needed because if you don't use return statement then it will not be rendered.
            })}
          </div>
          <p className="text-green-600 font-semibold">
            Correct Answer : {retrieveData[currentIndex]?.correctAnswer}
          </p>
          <p className="text-gray-600 text-xl">
            Explanation : {retrieveData[currentIndex]?.explanation}
          </p>
        </div>
      )}

      <div className="flex items-center justify-center mt-6 w-full gap-10">
        {/* ⬅️ Back Button */}
        <button
          onClick={handleBack}
          className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 active:scale-95 text-gray-700 font-medium text-base rounded-lg shadow-sm hover:shadow transition-all duration-200"
        >
          Back
        </button>

        {/* ➡️ Next Button */}
        <button
          onClick={handleNext}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium text-base rounded-lg shadow-sm hover:shadow transition-all duration-200"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PhysicsMock;
