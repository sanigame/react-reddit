import axios from 'axios'

export const FETCH_REDDIT_REQUEST = 'FETCH_REDDIT_REQUEST'
export const FETCH_REDDIT_SUCCESS = 'FETCH_REDDIT_SUCCESS'
export const FETCH_REDDIT_FAILURE = 'FETCH_REDDIT_FAILURE'

const fetchRedditFailure = (error) => ({
  type: FETCH_REDDIT_FAILURE,
  payload: error.message,
})

const fetchRedditSuccess = (payload) => ({
  type: FETCH_REDDIT_SUCCESS,
  payload,
})

const fetchReddit = () => (
  async (dispatch) => {
    dispatch({ type: FETCH_REDDIT_REQUEST })

    try {
      const res = await axios.get('https://www.reddit.com/r/all/hot.json')
      dispatch(fetchRedditSuccess(res.data))
    } catch (error) {
      dispatch(fetchRedditFailure(error))
    }
  }
)

const shouldFetchReddit = state => {
  const reddit = state.reddit
  if(!reddit.isFetching) {
    return true
  }

  return false
}

export const fetchRedditIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchReddit(getState())) {
    return dispatch(fetchReddit())
  }

  return null
}