import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './index'

storiesOf('core.Button', module)
  .add('default', () => (
    <Button label='Default Button' onClick={action('onClick')} />
  ))
  .add('default (disabled)', () => (
    <Button label='Default Button (disabled)' disabled onClick={action('onClick')} />
  ))
  .add('primary', () => (
    <Button label='Primary Button' primary onClick={action('onClick')} />
  ))
  .add('primary (disabled)', () => (
    <Button label='Primary Button (disabled)' primary disabled onClick={action('onClick')} />
  ))
