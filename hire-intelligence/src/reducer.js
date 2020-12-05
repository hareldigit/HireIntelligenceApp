import moment from 'moment'

export const initialState = {
  data: [],
  user: null,
  dateRange: {
    start: moment(),
    due: moment().add(2, 'months'),
  },
}

const getUserNameFromEmail = (email) => {
  let userName = null
  if (email) {
    var splited = email.split('@')
    userName = splited[0]
  }
  return userName
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        user: {
          ...action.user,
          userName: getUserNameFromEmail(action.user?.email),
        },
      }
    }
    case 'SET_DATA': {
      return {
        ...state,
        data: action.data,
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
