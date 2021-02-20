import axios from "axios";
import { useEffect, useState } from "react";
import BarGraph from "../Graphs/BarGraph";
import "./Cards.css";

export default function CardItem({
  availabilityPercentage,
  isRunning,
  machine,
  performancePercentage,
  qualityPercentage,
}) {
  const [graphData, setGraphData] = useState([]);
  const [graphLabelList, setGraphLabelList] = useState([]);

  useEffect(() => {
    axios.get(`api/oee/hourly-numbers/${machine}`)
      .then((res) => prepGraphData(res.data))
      .catch((err) => console.log(`ERROR: oee hourly GET failed: ${err}`));
  }, []);

  const prepGraphData = (res) => {
    let data = [];
    let labelList = [];
    for (let hour of res) {
      labelList.push(hour.hourly);
      data.push(hour.oee_reading * 100);
    }
    setGraphData(data);
    setGraphLabelList(labelList);
  };

  return (
    <div className="card-wrapper">
      <div className="title-wrapper">
        <h2>{machine}</h2>
      </div>
      <div className={`status-wrapper ${isRunning ? "status-on" : ""}`}>
        <h3>{isRunning ? "Running" : "Not Running"}</h3>
      </div>
      <div className="percentage-wrapper">
        <p>
          OEE: <span>{(availabilityPercentage * performancePercentage * qualityPercentage * 100).toFixed(2)}%</span>
        </p>
        <p>
          Availability: <span>{(availabilityPercentage * 100).toFixed(2)}%</span>
        </p>
        <p>
          Performance: <span>{(performancePercentage * 100).toFixed(2)}%</span>
        </p>
        <p>
          Quality: <span>{(qualityPercentage * 100).toFixed(2)}%</span>
        </p>
      </div>
      <BarGraph graphData={graphData} graphLabelList={graphLabelList} />
    </div>
  );
}
