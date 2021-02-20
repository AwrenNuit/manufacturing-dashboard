import { Bar } from "@reactchartjs/react-chart.js";

export default function BarGraph({ graphData, graphLabelList }) {
  const data = {
    labels: graphLabelList,
    datasets: [
      {
        data: graphData,
        backgroundColor: [
          "rgba(7, 69, 126, 0.5)",
          "rgba(7, 69, 126, 0.5)",
          "rgba(7, 69, 126, 0.5)",
          "rgba(7, 69, 126, 0.5)",
          "rgba(7, 69, 126, 0.5)",
        ],
        borderColor: [
          "rgb(7, 69, 126)",
          "rgb(7, 69, 126)",
          "rgb(7, 69, 126)",
          "rgb(7, 69, 126)",
          "rgb(7, 69, 126)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    legend: { display: false },
    options: { maintainAspectRatio: false },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 100,
          },
        },
      ],
    },
  };

  return <Bar data={data} options={options} height="110px" />;
}
