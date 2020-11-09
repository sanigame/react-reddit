import React from 'react'
import { useParams } from 'react-router-dom'

import { ContentDetail } from '../features/content'

function RedditDetail() {
  const { name } = useParams()
  return (
    <div>
      <ContentDetail name={name} />
    </div>
  )
}

export default RedditDetail
