import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchRedditIfNeeded } from './actions'

function RedditList() {
  const dispatch = useDispatch();
  const reddit = useSelector(state => state.reddit)

  useEffect(() => {
    dispatch(fetchRedditIfNeeded())
    return () => {
      console.log('Unmount')
    }
  }, [dispatch])

  return (
    <div>
      {
        reddit.value.map((value, i) => (
          <p key={i}>{value.data.title}</p>
        ))
      }
    </div>
  )
}

export default RedditList
