import { 
  FETCH_REDDIT_DETAIL_REQUEST,
  FETCH_REDDIT_DETAIL_SUCCESS,
  FETCH_REDDIT_DETAIL_FAILURE,
} from './actions'

const content =  (state = {}, { type, payload, name }) => {
  switch (type) {
    case FETCH_REDDIT_DETAIL_REQUEST:
      return {
        ...state,
        [name]: {
          isFetching: true,
          error: false,
        }
      }
    case FETCH_REDDIT_DETAIL_SUCCESS:
      return {
        ...state,
        [name]: {
          isFetching: false,
          value: payload.data.children,
        }
      }
    case FETCH_REDDIT_DETAIL_FAILURE:
      return {
        ...state,
        [name]: {
          isFetching: false,
          error: payload,
        }
      }
  default:
    return state
  }
}

export default content
