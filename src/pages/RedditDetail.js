import React from 'react'
import { useParams } from 'react-router-dom'

function RedditDetail() {
  const { name } = useParams()
  return (
    <div>
      detail {name}
    </div>
  )
}

export default RedditDetail
