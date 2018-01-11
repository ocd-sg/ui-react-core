// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card, CardHeader, CardFooter, CardContent, CardBleed } from './index'
import ButtonGroup from '../ButtonGroup'
import Button from '../Button'
import ChartFrame from '../../charts/ChartFrame'
import ChartAxis from '../../charts/ChartAxis'
import AreaChart from '../../charts/AreaChart'

storiesOf('core.Card', module)
  .add('basic', () => (
    <Card className='ma3'>
      <CardContent>
        This is a card.
      </CardContent>
    </Card>
  ))
  .add('header', () => (
    <Card className='ma3'>
      <CardHeader>
        The Header
      </CardHeader>
      <CardContent>
        This is a card with a header.
      </CardContent>
    </Card>
  ))
  .add('footer', () => (
    <Card className='ma3'>
      <CardContent>
        This is a card with a footer.
      </CardContent>
      <CardFooter>
        The Footer
      </CardFooter>
    </Card>
  ))
  .add('header & footer', () => (
    <Card className='ma3'>
      <CardHeader>
        The Header
      </CardHeader>
      <CardContent>
        This is a card with both a header and a footer.
      </CardContent>
      <CardFooter>
        The Footer
      </CardFooter>
    </Card>
  ))
  .add('button', () => (
    <Card className='ma3'>
      <CardHeader>
        The Header
      </CardHeader>
      <CardContent>
        Let’s put some buttons into the footer.
      </CardContent>
      <CardFooter className='tr'>
        <ButtonGroup>
          <Button label='Ultra' size='small' />
          <Button label='Magic' size='small' primary />
        </ButtonGroup>
      </CardFooter>
    </Card>
  ))
  .add('bleed', () => (
    <Card className='ma3'>
      <CardHeader>
        The Header
      </CardHeader>
      <CardBleed className='aspect-ratio aspect-ratio--16x9'>
        <div className='aspect-ratio--object bg-primary-100' />
      </CardBleed>
      <CardFooter>
        The Footer
      </CardFooter>
    </Card>
  ))
  .add('chart', () => {
    const data = [1, 2, 3, 4, 5]
    const max = {
      x: data.length - 1,
      y: data.reduce((a, b) => Math.max(a, b), 0)
    }

    const config = {
      padding: [16, 40, 32, 16],
      xDomain: [0, max.x],
      yDomain: [0, max.y]
    }

    return (
      <Card className='ma3'>
        <CardHeader>
          Title of the Chart Goes Here
        </CardHeader>
        <CardBleed className='h5'>
          <ChartFrame {...config}>
            <AreaChart data={data} />
            <ChartAxis position='right' />
            <ChartAxis position='bottom' />
          </ChartFrame>
        </CardBleed>
        <CardFooter>
          The Footer
        </CardFooter>
      </Card>
    )
  })
