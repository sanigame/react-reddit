import axios from 'axios'

export const FETCH_SUBREDDIT_REQUEST = 'FETCH_SUBREDDIT_REQUEST'
export const FETCH_SUBREDDIT_SUCCESS = 'FETCH_SUBREDDIT_SUCCESS'
export const FETCH_SUBREDDIT_FAILURE = 'FETCH_SUBREDDIT_FAILURE'

const fetchSubredditFailure = (error) => ({
  type: FETCH_SUBREDDIT_FAILURE,
  payload: error.message,
})

const fetchSubredditSuccess = (payload) => ({
  type: FETCH_SUBREDDIT_SUCCESS,
  payload,
})

const fetchSubreddit = () => (
  async (dispatch) => {
    dispatch({ type: FETCH_SUBREDDIT_REQUEST })

    try {
      const res = await axios.get('`https://www.reddit.com/subreddits/default.json')
      dispatch(fetchSubredditSuccess(res.data))
    } catch (error) {
      dispatch(fetchSubredditFailure(error))
    }
  }
)

const shouldFetchSubreddit = state => {
  const subreddits = state.subreddits
  if(!subreddits.isFetching) {
    return true
  }

  return false
}

export const fetchSubredditIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchSubreddit(getState())) {
    return dispatch(fetchSubreddit())
  }

  return null
}
