import React from 'react'
import DateRange from '../DateRange/DateRange'
import Chart from '../Chart/Chart'

function Dashboard() {
  return (
    <div className="dashboard">
      <DateRange />
      <Chart />
    </div>
  )
}

export default Dashboard
