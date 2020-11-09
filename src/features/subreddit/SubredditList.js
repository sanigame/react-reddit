import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import List from '@material-ui/core/List'
import CircularProgress from '@material-ui/core/CircularProgress';

import SubredditItem from './SubredditItem'
import { fetchSubredditIfNeeded } from './actions'

function SubredditList() {
  const dispatch = useDispatch()
  const subreddit = useSelector(state => state.subreddit)

  useEffect(() => {
    dispatch(fetchSubredditIfNeeded())
    return () => {
      console.log('Unmount')
    }
  }, [dispatch])

  return (
    <List>
      {
        subreddit.isFetching ?
        <CircularProgress style={{ display: 'block', margin: 'auto' }} color="secondary" /> :
        subreddit.value.map((value, index) => (
          <SubredditItem text={value.data.title} to={value.data.display_name} key={index} />
        ))
      }
    </List>
  )
}

export default SubredditList
