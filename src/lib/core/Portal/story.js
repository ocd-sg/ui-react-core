import React from 'react'
import { storiesOf } from '@storybook/react'

import Portal from './index'
import Text from '../Text'

storiesOf('core.Portal', module)
  .add('basic', () => (
    <Portal>
      <Text size='large'>this lives outside of `root` component</Text>
    </Portal>
  ))
