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

  const buildParameters = () => {
    console.log('🚀 start >> ', dateRange?.start)
    console.log('🚀 due>> ', dateRange?.due)
    const start = convertToNullableTimestamp(dateRange?.start)
    const due = convertToNullableTimestamp(dateRange?.due)
    const parameters = {
      Start: start,
      Due: due,
    }
    return parameters
  }

  const prepareResult = (data) => {
    let result = []
    if (data) {
      result = data.map((r) => ({
        ...r,
        publishedAt: parseDate(r.publishedAt),
      }))
      result = sort(result)
    }
    return result
  }

  const onSuccess = (data) => {
    let result = prepareResult(data)
    dispatch({ type: 'SET_DATA', data: result })
    dispatch({ type: 'SUCCESS' })
    dispatch({ type: 'SET_INDETERMINATE', indeterminate: false })
  }

  const onError = (error) => {
    dispatch({ type: 'SET_INDETERMINATE', indeterminate: false })
    dispatch({ type: 'SET_ERROR', error: error })
    throw error.message
  }

  useEffect(() => {
    const getData = async () => {
      dispatch({ type: 'SET_INDETERMINATE', indeterminate: true })
      await axios({
        method: 'post',
        url: `/cumulativeViews/get`,
        dataType: 'json',
        contentType: 'application/json;',
        data: buildParameters(),
      })
        .catch((err) => {
          onError(err)
        })
        .then((response) => {
          onSuccess(response.data)
        })
    }
    getData()
  }, [dateRange])

  return [data]
}

export default useData
