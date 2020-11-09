import { combineReducers } from 'redux'

import { subreddit } from './features/subreddit'
import { reddit } from './features/reddit'
import { content } from './features/content'
import { comment } from './features/comment'

const rootReducer = combineReducers({
  subreddit,
  reddit,
  content,
  comment,
})

export default rootReducer
