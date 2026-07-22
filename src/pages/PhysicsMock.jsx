import { useEffect, useState } from "react";
import axios from "axios";

const PhysicsMock = () => {
  const [retrieveData, setRetrieveData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/questions?topic=physics class 10th",
        );
        console.log("Mission Success: API is working good!", response.data.data);
        setRetrieveData(response.data.data);
      } catch (error) {
        console.log("mission failed", error.message);
      }
    };

    fetchData();
  }, []);

  return <div>Mission code Active</div>;
};

export default PhysicsMock;
