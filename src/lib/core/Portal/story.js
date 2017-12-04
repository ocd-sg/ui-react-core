import React from 'react'
import { storiesOf } from '@storybook/react'

import Portal from './index'

storiesOf('core.Portal', module)
  .add('basic', () => (
    <Portal>
      <h1>this lives outside of `root` component</h1>
    </Portal>
  ))
