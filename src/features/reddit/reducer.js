import { 
  FETCH_REDDIT_REQUEST,
  FETCH_REDDIT_SUCCESS,
  FETCH_REDDIT_FAILURE,
} from './actions'



const reddit =  (state = {}, { type, payload, name }) => {
  switch (type) {
    case FETCH_REDDIT_REQUEST:
      return {
        ...state,
        [name]: {
          isFetching: true,
          error: false,
        }
      }
    case FETCH_REDDIT_SUCCESS:
      return {
        ...state,
        [name]: {
          isFetching: false,
          // value: state.value.concat(payload.data.children),
          value: payload.data.children,
        }
      }
    case FETCH_REDDIT_FAILURE:
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

export default reddit
