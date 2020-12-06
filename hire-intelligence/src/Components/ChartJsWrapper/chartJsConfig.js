const defaultJsConfig = {
  type: 'bar',
  data: {
    datasets: [
      {
        label: 'Cumulative job views',
        data: [18, 50, 900, 10],
        type: 'line',
        borderColor: '#a3c657',
        backgroundColor: '#a3c657',
        fill: false,
        order: 1,
        lineTension: 0,
        spanGaps: false,
        pointRadius: 5,
        yAxisID: 'left-y-axis',
      },
      {
        label: 'Cumulative predicted job views',
        data: [10, 30, 80, 30],
        type: 'line',
        borderColor: '#74b1c2',
        backgroundColor: '#74b1c2',
        pointBackgroundColor: 'white',
        borderDash: [3, 3],
        fill: false,
        order: 2,
        lineTension: 0,
        spanGaps: false,
        pointRadius: 5,
        yAxisID: 'left-y-axis',
      },
      {
        label: 'Active jobs',
        data: [10, 20, 30, 40],
        order: 3,
        yAxisID: 'right-y-axis',
      },
    ],
    labels: ['January', 'February', 'March', 'April'],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Cumulative job views vs. prediction',
      fontColor: '#487995',
      fontSize: 25,
    },
    tooltips: {
      mode: 'point',
    },
    legend: { position: 'bottom' },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            autoSkip: false,
            maxRotation: 70,
            minRotation: 70,
          },
        },
      ],
      yAxes: [
        {
          id: 'left-y-axis',
          position: 'left',
          ticks: {
            stepSize: 500,
            min: 0,
            max: 1500,
          },
          scaleLabel: {
            fontSize: 14,
            display: true,
            labelString: 'Job views',
          },
        },
        {
          id: 'right-y-axis',
          gridLines: {
            display: false,
          },
          ticks: {
            stepSize: 50,
            min: 0,
            max: 100,
          },
          scaleLabel: {
            fontSize: 14,
            display: true,
            labelString: 'Job',
          },
          type: 'linear',
          position: 'right',
        },
      ],
    },
  },
}

function configureChartJs(
  chartTitle,
  activeJobsLabel,
  predictedJobViewsLabel,
  jobViewsLabel,
  leftAxisLabelString,
  rightAxisLabelString,
) {
  let jsConfig = defaultJsConfig
  return jsConfig
}

export default configureChartJs
