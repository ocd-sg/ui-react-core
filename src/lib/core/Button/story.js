import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import 'tachyons'
import Button from './index'

storiesOf('core', module)
  .add('Button: default', () => (
    <Button label='Default Button' onClick={action('onClick')} />
  ))
  .add('Button: default (disabled)', () => (
    <Button label='Default Button (disabled)' disabled onClick={action('onClick')} />
  ))
  .add('Button: primary', () => (
    <Button label='Primary Button' primary onClick={action('onClick')} />
  ))
  .add('Button: primary (disabled)', () => (
    <Button label='Primary Button (disabled)' primary disabled onClick={action('onClick')} />
  ))
