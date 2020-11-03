import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

function SubredditItem({ text }) {
  return (
    <ListItem button>
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
