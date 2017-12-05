// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import Bar from './index'
import Button from '../Button'

storiesOf('core.Bar', module)
  .add('basic', () => (
    <Bar size='small'>
      <Button size='small' label='hello' />
    </Bar>
  ))
