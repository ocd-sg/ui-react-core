// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import Wrapper from './index'

storiesOf('core', module)
  .add('Wrapper', () => (
    <Wrapper>
      <p className='sans-serif'>A `div`less wrapper</p>
      <p className='sans-serif'>for containing</p>
      <p className='sans-serif'>children</p>
    </Wrapper>
  ))
