import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchRedditIfNeeded } from './actions'
import MediaCard from '../../commons/MediaCard'

function RedditList() {
  let { name = 'all' } = useParams()
  const dispatch = useDispatch();
  const reddit = useSelector(state => state.reddit)

  const redditList = reddit[name] || { isFetching: true, value: []}

  useEffect(() => {
    dispatch(fetchRedditIfNeeded(name))
    return () => {
      console.log('Unmount')
    }
  }, [dispatch, name])

  return (
    <div>
      { redditList.isFetching ? 
          <CircularProgress style={{ display: 'block', margin: 'auto' }} color="secondary" />  : 
          redditList.value.map((value, i) => (
            <MediaCard title={value.data.title} detail={value.data.subreddit} name={value.data.name} key={i} />
          )) 
      }
    </div>
  )
}

export default RedditList
