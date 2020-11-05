import React from 'react'
import { shallow } from 'enzyme'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import MediaCard from './MediaCard'

describe('<MediaCard />', () => {
  const wrapper = shallow(<MediaCard />)
  it('should show image', () => {
    expect(wrapper.find('#image')).toHaveLength(1)
  })
  it('should render Card component', () => {
    expect(wrapper.find(Card)).toHaveLength(1)
  })
  it('should render CardActionArea component', () => {
    expect(wrapper.find(CardActionArea)).toHaveLength(1)
  })
})
