import React, { useState } from 'react'
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import moment from 'moment'
import { useStateValue } from '../../StateProvider'
import './AirbnbDateRangeWrapper.css'

function AirbnbDateRangeWrapper() {
  const [{ dateRange }, dispatch] = useStateValue()

  const [focus, setFocus] = useState(null)

  const handleOnDateChange = ({ startDate, endDate }) => {
    dispatch({
      type: 'SET_DATE_RANGE',
      dateRange: {
        start: startDate ? moment(startDate) : null,
        due: endDate ? moment(endDate) : null,
      },
    })
  }

  return (
    <div>
      <DateRangePicker
        readOnly
        startDatePlaceholderText="Start"
        startDate={dateRange.start}
        onDatesChange={handleOnDateChange}
        endDatePlaceholderText="End"
        endDate={dateRange.due}
        numberOfMonths={1}
        displayFormat="MMM D (YYYY)"
        showClearDates={true}
        focusedInput={focus}
        onFocusChange={(focus) => setFocus(focus)}
        startDateId="startDate"
        endDateId="endDate"
        minimumNights={0}
        isOutsideRange={(date) => {
          if (focus == 'startDate') {
            return dateRange.due != null && date.isAfter(dateRange.due)
          }
          if (focus == 'endDate') {
            return dateRange.start != null && date.isBefore(dateRange.start)
          }
          return false
        }}
      />
    </div>
  )
}
export default AirbnbDateRangeWrapper
