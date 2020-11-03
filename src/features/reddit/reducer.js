import { 
  FETCH_REDDIT_REQUEST,
  FETCH_REDDIT_SUCCESS,
  FETCH_REDDIT_FAILURE,
} from './actions'


const initialState = {
  isFetching: false,
  error: false,
  value: []
}

const reddit =  (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_REDDIT_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
      }
    case FETCH_REDDIT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        value: state.value.concat(payload.data.children),
      }
    case FETCH_REDDIT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
      }
  default:
    return state
  }
}

export default reddit
