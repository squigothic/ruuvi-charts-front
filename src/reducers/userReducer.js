const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_USER':
      return action.data
    default:
      return state
  }
}

export const initUser = user => {
  return {
    type: 'INIT_USER',
    data: user,
  }
}

export default userReducer
