import { 
  FETCH_REDDIT_COMMENT_REQUEST,
  FETCH_REDDIT_COMMENT_SUCCESS,
  FETCH_REDDIT_COMMENT_FAILURE,
} from './actions'

const comment =  (state = {}, { type, payload, name }) => {
  switch (type) {
    case FETCH_REDDIT_COMMENT_REQUEST:
      return {
        ...state,
        [name]: {
          isFetching: true,
          error: false,
        }
      }
    case FETCH_REDDIT_COMMENT_SUCCESS:
      return {
        ...state,
        [name]: {
          isFetching: false,
          value: payload[1].data.children,
        }
      }
    case FETCH_REDDIT_COMMENT_FAILURE:
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

export default comment
