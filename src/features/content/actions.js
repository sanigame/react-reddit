import axios from 'axios'

export const FETCH_REDDIT_DETAIL_REQUEST = 'FETCH_REDDIT_DETAIL_REQUEST'
export const FETCH_REDDIT_DETAIL_SUCCESS = 'FETCH_REDDIT_DETAIL_SUCCESS'
export const FETCH_REDDIT_DETAIL_FAILURE = 'FETCH_REDDIT_DETAIL_FAILURE'

const fetchRedditDetailFailure = (error, name) => ({
  type: FETCH_REDDIT_DETAIL_FAILURE,
  payload: error.message,
  name,
})

const fetchRedditDetailSuccess = (payload, name) => ({
  type: FETCH_REDDIT_DETAIL_SUCCESS,
  payload,
  name
})

const fetchRedditDetail = (name) => (
  async (dispatch) => {
    dispatch({ type: FETCH_REDDIT_DETAIL_REQUEST, name })

    try {
      const res = await axios.get(`https://www.reddit.com/by_id/${name}.json`)
      dispatch(fetchRedditDetailSuccess(res.data, name))
    } catch (error) {
      dispatch(fetchRedditDetailFailure(error))
    }
  }
)

const shouldFetchRedditDetail = (state, name) => {
  const content = state.content[name]
  if(!content || content.error) {
    return true
  }

  return false
}

export const fetchRedditDetailIfNeeded = (name) => (dispatch, getState) => {
  if (shouldFetchRedditDetail(getState(), name)) {
    return dispatch(fetchRedditDetail(name))
  }

  return null
}