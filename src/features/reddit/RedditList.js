import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchRedditIfNeeded } from './actions'

function RedditList() {
  let { name } = useParams()
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
          <p>loading</p> : 
          redditList.value.map((value, i) => (
            <p key={i}>{value.data.title}</p>
          )) 
      }
    </div>
  )
}

export default RedditList
