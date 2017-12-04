import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import MapGL from '../MapGL'
import Viewport from './index'

storiesOf('maps.Viewport', module)
  .add('basic', () => (
    <div className='aspect-ratio--object'>
      <MapGL>
        <Viewport onChange={action('onChange')} />
      </MapGL>
    </div>
  ))
