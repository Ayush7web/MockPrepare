import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "lucide-react";

const PhysicsMock = () => {
  const [retrieveData, setRetrieveData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/questions?topic=physics class 10th",
        );
        // console.log(
        //   "Mission Success: API is working good!",

        //   response.data.data,
        // );
        setRetrieveData(response.data.data);
      } catch (error) {
        console.log("mission failed", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="fixed flex z-50 inset-0 items-center justify-center bg-white/70">
        <Loader className="w-10 h-10 animate-spin" />
      </div>
      <div className="relative top-10 ">
        <div className="text-3xl text-center font-semibold text-blue-500 shadow-2xl hover:text-blue-700">
          Topic: Physics <span>For Class 10th</span>
        </div>

        <div className="space-y-2.5 border">
          <p>{retrieveData[currentIndex]?.topic}</p>
          <p>{retrieveData[currentIndex]?.questionsText}</p>
          <p>{retrieveData[currentIndex]?.options}</p>
          <p>{retrieveData[currentIndex]?.correctAnswer}</p>
          <p>{retrieveData[currentIndex]?.explanation}</p>
        </div>
      </div>
    </>
  ); 
};

export default PhysicsMock;
