import React from 'react'
import List from '@material-ui/core/List'

import SubredditItem from './SubredditItem'

function SubredditList() {
  return (
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <SubredditItem text={text} key={index} />
      ))}
    </List>
  )
}

export default SubredditList
