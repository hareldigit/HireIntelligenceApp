import React, { useEffect, useRef, useState } from 'react'
import './ChartJsWrapper.css'
import Chartjs from 'chart.js'
import configureChartJs from './chartJsConfig'

function ChartJsWrapper({
  activeJobs,
  publishedDates,
  jobViews,
  predictedJobViews,
  chartTitle,
  activeJobsLabel,
  predictedJobViewsLabel,
  jobViewsLabel,
  leftAxisLabelString,
  rightAxisLabelString,
}) {
  const chartWrapper = useRef(null)
  const [chartInstance, setChartInstance] = useState(null)
  const [config, setConfig] = useState(null)

  useEffect(() => {
    if (chartWrapper && chartWrapper.current) {
      let configChartJs = configureChartJs(
        chartTitle,
        activeJobsLabel,
        predictedJobViewsLabel,
        jobViewsLabel,
        leftAxisLabelString,
        rightAxisLabelString,
      )
      setConfig(configChartJs)
      applyChartJsData()
      initializeChartJs()
    }
  }, [chartWrapper, config, activeJobs])

  const initializeChartJs = () => {
    chartInstance?.destroy()
    const newChartInstance = new Chartjs(chartWrapper.current, config)
    setChartInstance(newChartInstance)
  }

  const applyChartJsData = () => {
    if (config) {
      setXAxesLabels(publishedDates)
      setBarData(activeJobs)
      setGreenLineData(jobViews)
      setAzureLineData(predictedJobViews)
      setConfig(config)
    }
  }

  const setXAxesLabels = (labels) => {
    config.data.labels = labels
  }

  const setBarData = (data) => {
    config.data.datasets[2].data = data
  }

  const setGreenLineData = (data) => {
    config.data.datasets[0].data = data
  }

  const setAzureLineData = (data) => {
    config.data.datasets[1].data = data
  }

  const resetChartJsData = () => {
    chartInstance.data.labels.pop()
    chartInstance.data.datasets.forEach((dataset) => {
      dataset.data.pop()
    })
    chartInstance.update()
  }

  return (
    <div className="chartJsWrapper" style={{ height: '65vh' }}>
      <canvas ref={chartWrapper} />
    </div>
  )
}

export default ChartJsWrapper
