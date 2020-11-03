const initialState = {
  isFetching: false,
  error: false,
  value: []
}

const subreddit = (state = initialState, { type, payload }) => {
  switch (type) {

  // case typeName:
  //   return { ...state, ...payload }

  default:
    return state
  }
}

export default subreddit
