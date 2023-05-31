import React, {useState, useEffect} from "react";
import "./features.css";
import axios from "axios";

function Features() {
  const [features, setFeatures] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://raftinglb.onrender.com/features");
                setFeatures(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
  return (
    <div className="features_main">
      {features.map((feature, index) => {
        return (
          <div className="feature" key={index}>
            <h2>0{feature.number}</h2>
            <h5>{feature.title}</h5>
            <p>{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Features;
