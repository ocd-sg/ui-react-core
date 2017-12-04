import React from 'react'
import { storiesOf } from '@storybook/react'

import Tooltip from './index'
import Text from '../Text'

storiesOf('core.Tooltip', module)
  .add('basic', () => (
    <Tooltip opened>
      <div className='pa2 nowrap'>
        <Text size='large'>Hello Sunshine</Text>
      </div>
    </Tooltip>
  ))
