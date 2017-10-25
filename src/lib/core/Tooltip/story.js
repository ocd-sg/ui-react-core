import React from 'react'
import { storiesOf } from '@storybook/react'

import Tooltip from './index'

storiesOf('core', module)
  .add('Tooltip', () => (
    <Tooltip opened>
      <p>Hello Sunshine</p>
    </Tooltip>
  ))
