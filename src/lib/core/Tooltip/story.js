import React from 'react'
import { storiesOf } from '@storybook/react'

import 'tachyons'
import Tooltip from './index'

storiesOf('core', module)
  .add('Tooltip', () => (
    <Tooltip opened>
      <p className='sans-serif'>Hello Sunshine</p>
    </Tooltip>
  ))
