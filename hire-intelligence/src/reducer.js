import moment from 'moment'

export const initialState = {
  data: [],
  error: null,
  indeterminate: false,
  dateRange: {
    start: moment(),
    due: moment().add(2, 'months'),
  },
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ERROR': {
      return {
        ...state,
        error: action.error,
      }
    }
    case 'SUCCESS': {
      return {
        ...state,
        error: null,
      }
    }
    case 'SET_DATA': {
      return {
        ...state,
        data: action.data,
      }
    }
    case 'SET_INDETERMINATE': {
      return {
        ...state,
        data: action.indeterminate,
      }
    }
    case 'SET_DATE_RANGE': {
      if (action.dateRange.start == null && action.dateRange.due == null) {
        action.dateRange = initialState.dateRange
      }
      return {
        ...state,
        dateRange: action.dateRange,
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
