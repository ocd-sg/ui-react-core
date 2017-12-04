import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ButtonGroup from './index'
import Button from '../Button'

storiesOf('core.ButtonGroup', module)
  .add('basic', () => (
    <ButtonGroup>
      <Button label='Primary' primary onClick={action('onClick')} />
      <Button label='Default' onClick={action('onClick')} />
      <Button label='Disabled' disabled onClick={action('onClick')} />
      <Button label='Primary Disabled' primary disabled onClick={action('onClick')} />
    </ButtonGroup>
  ))
  .add('size: small', () => (
    <ButtonGroup>
      <Button label='Primary' size='small' primary onClick={action('onClick')} />
      <Button label='Default' size='small' onClick={action('onClick')} />
      <Button label='Disabled' size='small' disabled onClick={action('onClick')} />
      <Button label='Primary Disabled' size='small' primary disabled onClick={action('onClick')} />
    </ButtonGroup>
  ))
