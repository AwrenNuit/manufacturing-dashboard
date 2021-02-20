export default function CardItem({
  availabilityPercentage,
  isRunning,
  oeePercentage,
  performancePercentage,
  qualityPercentage,
  title,
}) {
  return (
    <div className="card-wrapper">
      <div className="title-wrapper">
        <h3>{title}</h3>
      </div>
      <div className="status-wrapper">
        <h3>{isRunning ? "Running" : "Not Running"}</h3>
      </div>
      <div className="percentage-wrapper">
        <p>
          OEE: <span>{((availabilityPercentage * performancePercentage * qualityPercentage) * 100).toFixed(2)}</span>
        </p>
        <p>
          Availability: <span>{(availabilityPercentage * 100).toFixed(2)}</span>
        </p>
        <p>
          Performance: <span>{(performancePercentage * 100).toFixed(2)}</span>
        </p>
        <p>
          Quality: <span>{(qualityPercentage * 100).toFixed(2)}</span>
        </p>
      </div>
      <div className="graph-wrapper">{/* GRAPH GOES HERE */}</div>
    </div>
  );
}
