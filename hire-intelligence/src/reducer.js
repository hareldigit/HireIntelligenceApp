export const initialState = { data: [], user: null }

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
    default: {
      return state
    }
  }
}

export default reducer
