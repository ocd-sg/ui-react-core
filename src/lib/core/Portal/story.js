import React from 'react'
import { storiesOf } from '@storybook/react'

import 'tachyons'
import Portal from './index'

storiesOf('core', module)
  .add('Portal', () => (
    <Portal>
      <h1 className='sans-serif'>this lives outside of `root` component</h1>
    </Portal>
  ))
