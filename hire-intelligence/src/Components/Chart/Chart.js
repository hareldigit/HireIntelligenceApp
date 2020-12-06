import React, { useEffect, useState } from 'react'
import './Chart.css'
import useData from '../../CustomHooks/useData'
import ChartJsWrapper from '../ChartJsWrapper/ChartJsWrapper'

function Chart() {
  const [data] = useData()
  const [publishedDates, setPublishedDates] = useState([])
  const [jobViews, setJobViews] = useState([])
  const [predictedJobViews, setPredictedJobViews] = useState([])
  const [activeJobs, setActiveJobs] = useState([])

  useEffect(() => {
    if (data?.length > 0) {
      setActiveJobs(data.map((d) => d.activeJobs))
      setPublishedDates(data.map((d) => d.publishedAt.format('(YYYY) MMM D ')))
      setJobViews(data.map((d) => d.actuallyDailyViews))
      setPredictedJobViews(data.map((d) => d.predictedDailyViews))
    }
  }, [data])

  useEffect(() => {}, [publishedDates])

  return (
    <div className="chart">
      <ChartJsWrapper
        className="chart__chartWrapper"
        activeJobs={activeJobs}
        publishedDates={publishedDates}
        jobViews={jobViews}
        predictedJobViews={predictedJobViews}
        chartTitle={'Cumulative job views vs. prediction'}
        activeJobsLabel={'Active jobs'}
        predictedJobViewsLabel={'Cumulative predicted job views'}
        jobViewsLabel={'Cumulative job views'}
        leftAxisLabelString={'Job views'}
        rightAxisLabelString={'Job'}
      />
    </div>
  )
}

export default Chart
