import { useEffect } from 'react'
import { useStateValue } from '../StateProvider'
import moment from 'moment'
import axios from '../axios'

const apiDateTimeFormat = 'YYYY-MM-DDThh:mm:ss'

const parseDate = (date) => {
  let result = null
  if (date) {
    result = moment(date, apiDateTimeFormat)
  }
  return result
}
const convertToNullableTimestamp = (momentDate) => {
  let result = null
  if (momentDate && momentDate.isValid()) {
    const timestamp = momentDate.format('X')
    result = parseFloat(timestamp)
  }
  return result
}

const sort = (result) => {
  return result.sort((a, b) => a.publishedAt - b.publishedAt)
}

function useData() {
  const [{ data, dateRange }, dispatch] = useStateValue()

  useEffect(() => {
    const getData = async () => {
      const start = convertToNullableTimestamp(dateRange?.start)
      const due = convertToNullableTimestamp(dateRange?.due)
      const response = await axios({
        method: 'post',
        url: `/cumulativeViews/get`,
        dataType: 'json',
        contentType: 'application/json;',
        data: {
          Start: start,
          Due: due,
        },
      })
      let result = response.data
      if (result) {
        result = result.map((r) => ({
          ...r,
          publishedAt: parseDate(r.publishedAt),
        }))
        const sortedData = sort(result)
        dispatch({ type: 'SET_DATA', data: sortedData })
      } else {
        dispatch({ type: 'SET_DATA', data: [] })
      }
    }
    getData()
  }, [dateRange])

  return [data]
}

export default useData
