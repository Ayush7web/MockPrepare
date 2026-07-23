import { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="relative top-10 ">
      <div className="text-3xl text-center font-semibold text-blue-500 shadow-2xl hover:text-blue-700">
        Topic: Physics <span>For Class 10th</span>
      </div>
      {retrieveData.map((item, index) => (
        <div key={index} className="space-y-2.5 border">
          <p>{item.topic}</p>
          <p>{item.questionsText}</p>
          <p>{item.options}</p>
          <p>{item.correctAnswer}</p>
          <p>{item.explanation}</p>
        </div>
      ))}
    </div>
  );
};

export default PhysicsMock;
