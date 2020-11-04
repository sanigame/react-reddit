import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchRedditDetailIfNeeded } from './actions'
import MediaCard from '../../commons/MediaCard'

function ContentDetail({ name }) {
  const dispatch = useDispatch();
  const content = useSelector(state => state.content)

  useEffect(() => {
    dispatch(fetchRedditDetailIfNeeded(name))
    return () => {
      console.log('Unmount')
    }
  }, [dispatch, name])

  const redditContent = content[name] || { isFetching: true }
  // const detail = redditContent.value[0].data
  // console.log('redditContent', redditContent)

  return (
    <div>
      {
        redditContent.isFetching ? 
          <CircularProgress style={{ display: 'block', margin: 'auto' }} color="secondary" /> : 
          <MediaCard 
            title={redditContent.value[0].data.title} 
            detail={redditContent.value[0].data.subreddit} 
            name={redditContent.value[0].data.name}
          />
      }
    </div>
  )
}

ContentDetail.propTypes = {
  name: PropTypes.string.isRequired,
}

export default ContentDetail

