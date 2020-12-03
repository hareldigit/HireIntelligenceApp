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

const sort = (result) => {
  return result.sort(
    (a, b) => parseDate(a.publishedAt) - parseDate(b.publishedAt),
  )
}

function useData() {
  const [{ data }, dispatch] = useStateValue()

  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: 'get',
        url: `/cumulativeViews/get`,
      })
      const result = response.data
      if (result) {
        const sortedData = sort(result)
        dispatch({ type: 'SET_DATA', data: sortedData })
      } else {
        dispatch({ type: 'SET_DATA', data: [] })
      }
    }
    getData()
  }, [])

  return [data]
}

export default useData
