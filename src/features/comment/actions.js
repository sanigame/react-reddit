import axios from 'axios'

export const FETCH_REDDIT_COMMENT_REQUEST = 'FETCH_REDDIT_COMMENT_REQUEST'
export const FETCH_REDDIT_COMMENT_SUCCESS = 'FETCH_REDDIT_COMMENT_SUCCESS'
export const FETCH_REDDIT_COMMENT_FAILURE = 'FETCH_REDDIT_COMMENT_FAILURE'

const fetchRedditCommentFailure = (error, name) => ({
  type: FETCH_REDDIT_COMMENT_FAILURE,
  payload: error.message,
  name,
})

const fetchRedditCommentSuccess = (payload, name) => ({
  type: FETCH_REDDIT_COMMENT_SUCCESS,
  payload,
  name
})

const fetchRedditComment = (name, permalink) => (
  async (dispatch) => {
    dispatch({ type: FETCH_REDDIT_COMMENT_REQUEST, name })

    try {
      const res = await axios.get(`https://www.reddit.com${permalink}.json`)
      dispatch(fetchRedditCommentSuccess(res.data, name))
    } catch (error) {
      dispatch(fetchRedditCommentFailure(error))
    }
  }
)

const shouldFetchRedditComment = (state, name) => {
  const comment = state.comment[name]
  if(!comment || comment.error) {
    return true
  }

  return false
}

export const fetchRedditCommentIfNeeded = (name, permalink) => (dispatch, getState) => {
  if (shouldFetchRedditComment(getState(), name)) {
    return dispatch(fetchRedditComment(name, permalink))
  }

  return null
}