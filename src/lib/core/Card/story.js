// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from './index'
import Button from '../Button'

storiesOf('core.Card', module)
  .add('basic', () => (
    <Card>
      This is a card.
    </Card>
  ))
  .add('header', () => (
    <Card
      header='Header'
    >
      This is a card with a header.
    </Card>
  ))
  .add('footer', () => (
    <Card
      footer='Footer'
    >
      This is a card with a footer.
    </Card>
  ))
  .add('header & footer', () => (
    <Card
      header='Header'
      footer='Footer'
    >
      This is a card with a header and a footer.
    </Card>
  ))
  .add('button', () => (
    <Card
      header={(
        <Button label='header' primary />
      )}
      footer='Footer'
    >
      This is a card with a header and a footer.
    </Card>
  ))
