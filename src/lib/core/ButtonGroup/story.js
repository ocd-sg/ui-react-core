import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ButtonGroup from './index'
import Button from '../Button'

storiesOf('core', module)
  .add('ButtonGroup', () => (
    <ButtonGroup>
      <Button label='Primary' primary onClick={action('onClick')} />
      <Button label='Default' onClick={action('onClick')} />
      <Button label='Disabled' disabled onClick={action('onClick')} />
      <Button label='Primary Disabled' primary disabled onClick={action('onClick')} />
    </ButtonGroup>
  ))
