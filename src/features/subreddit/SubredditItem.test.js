import React from 'react'
import { shallow } from 'enzyme'

import SubredditItem from './SubredditItem'

describe('<SubredditItem /> component', () => {
  const wrapper = shallow(<SubredditItem />)

  it('should render item', () => {
    expect(wrapper.find('#nav-icon')).toHaveLength(1)
  })
  
})
