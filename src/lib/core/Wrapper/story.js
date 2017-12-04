// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import Wrapper from './index'
import Text from '../Text'

storiesOf('core.Wrapper', module)
  .add('basic', () => (
    <Wrapper>
      <Text size='large'>A `div`less wrapper </Text>
      <Text size='large'>for containing </Text>
      <Text size='large'>children</Text>
    </Wrapper>
  ))
