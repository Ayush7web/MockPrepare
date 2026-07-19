import { useEffect, useState } from "react";

const PhysicsMock = () => {
  const [retrieveData, setRetrieveData] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    const body = { topic: "physics class 10th" };
    console.log("sending payload to server:", body);

    fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
    .then((res) =>{
      if(!res.ok) throw new Error("Server responded with an error");
    })
    .then((data) =>{
      console.log("Data received from node js:" , data);
      setRetrieveData(data);
      setLoading(false);
    })
    .catch((err) =>{
      console.error("Fetch operation failure:", err);
      setLoading(false);
    });
  }, []);

  if(loading) return <div>Generating Physics questions...</div>


  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Physics Mock Test (Class 10th)</h2>

      {/* 2. State ke data ko screen par render karna */}
      {retrieveData.length === 0 ? (
        <p>No questions found or failed to load.</p>
      ) : (
        retrieveData.map((q, index) => (
          <div
            key={q.id || index}
            style={{ margin: "15px 0", borderBottom: "1px solid #ccc" }}
          >
            <h4>
              Q{index + 1}: {q.question}
            </h4>
            {q.options?.map((option, optIdx) => (
              <p key={optIdx}>
                <input type="radio" name={`question-${index}`} /> {option}
              </p>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default PhysicsMock;
