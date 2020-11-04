import { combineReducers } from 'redux'

import { subreddit } from './features/subreddit'
import { reddit } from './features/reddit'
import { content } from './features/content'

const rootReducer = combineReducers({
  subreddit,
  reddit,
  content
})

export default rootReducer
