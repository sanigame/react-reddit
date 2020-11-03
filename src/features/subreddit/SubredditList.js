import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import List from '@material-ui/core/List'

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
        subreddit.value.map((value, index) => (
          <SubredditItem text={value.data.title} key={index} />
        ))
      }
    </List>
  )
}

export default SubredditList
