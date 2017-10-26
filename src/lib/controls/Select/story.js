import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Select from './index'

const options = [
  {label: 'one', value: 1},
  {label: 'two', value: 2},
  {label: 'three', value: 3}
]

storiesOf('controls', module)
  .add('(WIP) Select: single', () => (
    <Select options={options} value={1} onChange={action('onChange')} />
  ))
  .add('(WIP) Select: single searchable', () => (
    <Select options={options} value={1} searchable onChange={action('onChange')} />
  ))
