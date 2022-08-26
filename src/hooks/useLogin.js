import {useReducer} from 'react'

function loginReducer(state, action) {
  switch (action.type) {
    case 'field':
      return {
        ...state,
        [action.field]: action.value
      }
    case 'login':
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case 'success':
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        error: ''
      }
    case 'error':
      return {
        ...state,
        isLoading: false,
        error: 'Incorrect username or password',
        username: '',
        password: ''
      }
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        username: '',
        password: ''
      }
    default: return state
  }
}

const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
  isLoggedIn: false
}

export default function useLogin() {
  // return [state, dispatch]
  return useReducer(loginReducer, initialState, () => initialState)
}
