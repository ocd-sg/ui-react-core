import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Input from './index'

storiesOf('core.Input', module)
  .add('basic', () => (
    <Input
      placeholder='Placeholder Text…'
      onChange={action('onChange')}
    />
  ))
  .add('focused', () => (
    <Input
      value='Focused'
      focused
      onChange={action('onChange')}
    />
  ))
  .add('disabled', () => (
    <Input
      value='Disabled'
      disabled
      onChange={action('onChange')}
    />
  ))
