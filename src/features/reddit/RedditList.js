import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchRedditIfNeeded } from './actions'

function RedditList() {
  const dispatch = useDispatch();
  const reddit = useSelector(state => state.reddit)
  let { name } = useParams()
  console.log('name', name)

  useEffect(() => {
    dispatch(fetchRedditIfNeeded(name))
    return () => {
      console.log('Unmount')
    }
  }, [dispatch, name])

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
