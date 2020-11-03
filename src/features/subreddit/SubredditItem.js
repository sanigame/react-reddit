import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Link } from 'react-router-dom'

function SubredditItem({ text, to }) {
  return (
    <ListItem button component={Link} to={`/subreddit/${to}`}>
      <ListItemIcon><InboxIcon /></ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
}

SubredditItem.propTypes = {
  text: PropTypes.string,
}

SubredditItem.defaultProps = {
  text: "",
}

export default SubredditItem
