// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from './index'
import Button from '../Button'

storiesOf('core', module)
  .add('Card: basic', () => (
    <Card>
      This is a card.
    </Card>
  ))
  .add('Card: header', () => (
    <Card
      header='Header'
    >
      This is a card with a header.
    </Card>
  ))
  .add('Card: footer', () => (
    <Card
      footer='Footer'
    >
      This is a card with a footer.
    </Card>
  ))
  .add('Card: header & footer', () => (
    <Card
      header='Header'
      footer='Footer'
    >
      This is a card with a header and a footer.
    </Card>
  ))
  .add('Card: button', () => (
    <Card
      header={(
        <Button label='header' primary />
      )}
      footer='Footer'
    >
      This is a card with a header and a footer.
    </Card>
  ))
