import React from 'react'
import { storiesOf } from '@storybook/react'

import 'tachyons'
import MapGL from './index'

storiesOf('maps', module)
  .add('MapGL', () => (
    <div className='aspect-ratio--object'>
      <MapGL />
    </div>
  ))
