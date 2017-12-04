import React from 'react'
import { storiesOf } from '@storybook/react'

import Tooltip from './index'

storiesOf('core.Tooltip', module)
  .add('basic', () => (
    <Tooltip opened>
      <div className='pa2 nowrap'>Hello Sunshine</div>
    </Tooltip>
  ))
