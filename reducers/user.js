
const initialState = {
    user_token: null,
    error: null
  }
  
  export default function (state = initialState, action = {}) {
    console.log("Actions in here", action)
    switch (action.type) {
      case 'LOGIN':
        return { ...state, user_token: action.payload };
    case 'SET_LOGIN_ERROR':
        return { ...state, error: action.payload};
    case 'LOGOUT':
        return initialState
      default:
        return state
    }
  }