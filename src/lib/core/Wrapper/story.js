// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import Wrapper from './index'

storiesOf('core', module)
  .add('Wrapper', () => (
    <Wrapper>
      <p>A `div`less wrapper</p>
      <p>for containing</p>
      <p>children</p>
    </Wrapper>
  ))
