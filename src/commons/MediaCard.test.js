import React from 'react'
import { shallow } from 'enzyme'
import MediaCard from './MediaCard'

describe('<MediaCard />', () => {
  it('should show image', () => {
    const wrapper = shallow(<MediaCard />)
    expect(wrapper.find('#image')).toHaveLength(1)
  })
  
})
