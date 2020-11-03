import { combineReducers } from 'redux'

import { subreddit } from './features/subreddit'
import { reddit } from './features/reddit'

const rootReducer = combineReducers({
  subreddit,
  reddit
})

export default rootReducer
