import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Buttons from './index'

const options = [
  {label: 'one', value: 1},
  {label: 'two', value: 2},
  {label: 'three', value: 3}
]

storiesOf('controls', module)
  .add('Buttons: single', () => (
    <Buttons options={options} value={1} onChange={action('onChange')} />
  ))
  .add('Buttons: multiple', () => (
    <Buttons multiple options={options} value={[1, 2]} onChange={action('onChange')} />
  ))
