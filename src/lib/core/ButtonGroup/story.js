import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ButtonGroup from './index'
import Button from '../Button'

storiesOf('core', module)
  .add('ButtonGroup', () => (
    <ButtonGroup>
      <Button label='One' onClick={action('onClick')} />
      <Button label='Two' onClick={action('onClick')} />
      <Button label='Three' onClick={action('onClick')} />
    </ButtonGroup>
  ))
