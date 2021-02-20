import axios from "axios";
import { useEffect, useState } from "react";
import CardItem from "./CardItem";

export default function CardList() {
  const [machineStatistics, setMachineStatistics] = useState([]);

  useEffect(() => {
    axios.get(`api/oee`)
    .then((res) => {
      setMachineStatistics(res.data);
    })
    .catch((err) => {
      console.log(`ERROR: oee GET failed: ${err}`);
    });;
  },[]);

  return (
    <>
      {machineStatistics.map((stats, i) => (
        <CardItem
          availabilityPercentage={stats.availability}
          isRunning={stats.running}
          key={i}
          performancePercentage={stats.performance}
          qualityPercentage={stats.quality}
          machine={stats.machine_number}
        />
      ))}
    </>
  );
}
