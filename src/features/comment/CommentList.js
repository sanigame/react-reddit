import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchRedditCommentIfNeeded } from './actions'

function CommentList({ name, permalink }) {
  const dispatch = useDispatch()
  const comment = useSelector(state => state.comment)

  useEffect(() => {
    dispatch(fetchRedditCommentIfNeeded(name, permalink))
    return () => {
      console.log('Unmount')
    }
  }, [dispatch, name, permalink])

  const redditComment = comment[name] || { isFetching: true }

  return (
    <div>
      {
        redditComment.isFetching ?
        <CircularProgress style={{ display: 'block', margin: 'auto' }} color="secondary" /> :
        redditComment.value.map(value=> (
          <p key={value.data.id}>[{value.data.author}]: {value.data.body}</p>
        ))
      }
    </div>
  )
}

CommentList.propTypes = {
  name: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
}

export default CommentList

