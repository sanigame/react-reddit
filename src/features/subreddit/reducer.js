import { 
  FETCH_SUBREDDIT_REQUEST,
  FETCH_SUBREDDIT_SUCCESS,
  FETCH_SUBREDDIT_FAILURE,
} from './actions'

const initialState = {
  isFetching: false,
  error: false,
  value: [{
    data: {
      title: 'All',
      display_name: 'all'
    }
  }]
}

const subreddit = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SUBREDDIT_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
      }
    case FETCH_SUBREDDIT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        value: state.value.concat(payload.data.children),
      }
    case FETCH_SUBREDDIT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
      }
  default:
    return state
  }
}

export default subreddit
