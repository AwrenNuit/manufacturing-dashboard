import CardItem from "./CardItem";

export default function CardList() {
  const machineStatistics = [
    {
      availabilityPercentage: 0.86,
      isRunning: true,
      performancePercentage: 0.98,
      qualityPercentage: 0.95,
      title: "M05",
    },
    {
      availabilityPercentage: 0.88,
      isRunning: true,
      performancePercentage: 0.98,
      qualityPercentage: 0.9,
      title: "M08",
    },
    {
      availabilityPercentage: 0,
      isRunning: false,
      performancePercentage: 0,
      qualityPercentage: 0,
      title: "M09",
    },
    {
      availabilityPercentage: 0.75,
      isRunning: true,
      performancePercentage: 0.92,
      qualityPercentage: 0.99,
      title: "M10",
    },
    {
      availabilityPercentage: 0.98,
      isRunning: true,
      performancePercentage: 0.99,
      qualityPercentage: 0.97,
      title: "M14",
    },
    {
      availabilityPercentage: 0.48,
      isRunning: true,
      performancePercentage: 0.83,
      qualityPercentage: 0.61,
      title: "M16",
    },
  ];

  return (
    <>
      {machineStatistics.map((stats, i) => (
        <CardItem
          availabilityPercentage={stats.availabilityPercentage}
          isRunning={stats.isRunning}
          key={i}
          performancePercentage={stats.performancePercentage}
          qualityPercentage={stats.qualityPercentage}
          title={stats.title}
        />
      ))}
    </>
  );
}
