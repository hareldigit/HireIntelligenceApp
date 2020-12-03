import React from 'react'
import './Chart.css'
import useData from '../../CustomHooks/useData'

function Chart() {
  const [data] = useData()
  return (
    <div className="chart">
      <h1>Chart would be here</h1>
    </div>
  )
}

export default Chart
