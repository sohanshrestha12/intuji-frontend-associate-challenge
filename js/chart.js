const ctx = document.getElementById("analytics-chart").getContext("2d");

const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
gradient1.addColorStop(0, "rgba(71, 69, 164, 0.3)");
gradient1.addColorStop(1, "rgba(71, 69, 164, 0)");

const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
gradient2.addColorStop(0, "rgba(249, 186, 51, 0.3)");
gradient2.addColorStop(1, "rgba(249, 186, 51, 0)");

const myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [13000, 12000, 14000, 5000, 10000, 18000, 12000],
        fill: false,
        borderColor: "#4745A4",
        fill: true,
        backgroundColor: gradient1,
        borderWidth: 2,
        tension: 0.4,
      },
      {
        data: [5000, 10000, 2000, 8000, 12000, 10000, 8000],
        fill: false,
        borderColor: "#F9BA33",
        fill: true,
        backgroundColor: gradient2,
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 20000,
        ticks: {
          stepSize: 5000,
          callback: function (value) {
            if (value >= 1000) {
              return value / 1000 + "k";
            }
            return value;
          },
        },
      },
    },
  },
});
