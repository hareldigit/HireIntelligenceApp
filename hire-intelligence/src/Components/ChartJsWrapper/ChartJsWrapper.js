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
  console.log(
    '🚀 ~ file: ChartJsWrapper.js ~ line 18 ~ publishedDates,',
    publishedDates,
  )
  console.log(
    '🚀 ~ file: ChartJsWrapper.js ~ line 18 ~ activeJobs,',
    activeJobs,
  )
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
      console.log('before >>>', configChartJs)
      setConfig(configChartJs)
      console.log('config>>>', config)
      applyChartJsData()
      initializeChartJs()
    }
  }, [chartWrapper, config, activeJobs])

  const initializeChartJs = () => {
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
    <div className="chartJsWrapper">
      <canvas
        ref={chartWrapper}
        style={({ height: 'auto' }, { width: '90vw' })}
      />
    </div>
  )
}

export default ChartJsWrapper
