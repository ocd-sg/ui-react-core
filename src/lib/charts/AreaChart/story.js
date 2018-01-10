// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import AreaChart from './index'
import ChartFrame from '../ChartFrame'
import ChartAxis from '../ChartAxis'
import Card, { CardBleed } from '../../core/Card'

storiesOf('charts.AreaChart', module)
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
        <CardBleed className='h5'>
          <ChartFrame {...config}>
            <AreaChart data={data} />
            <ChartAxis position='right' />
            <ChartAxis position='bottom' />
          </ChartFrame>
        </CardBleed>
      </Card>
    )
  })
  .add('object values', () => {
    const data = Array(100).fill(0).map((_, index) => ({x: index, y: Math.pow(index + 1, 3)}))
    const max = {
      x: data.map(({ x }) => x).reduce((a, b) => Math.max(a, b), 0),
      y: data.map(({ y }) => y).reduce((a, b) => Math.max(a, b), 0)
    }

    const config = {
      padding: [16, 64, 32, 16],
      xDomain: [0, max.x],
      yDomain: [0, max.y]
    }

    return (
      <Card className='ma3'>
        <CardBleed className='h5'>
          <ChartFrame {...config}>
            <AreaChart data={data} />
            <ChartAxis position='right' />
            <ChartAxis position='bottom' />
          </ChartFrame>
        </CardBleed>
      </Card>
    )
  })
  .add('ordinal values', () => {
    const data = Array(20).fill(0).map((_, index) => ({x: index, y: Math.pow(index + 1, 3)}))
    const max = {
      y: data.map(({ y }) => y).reduce((a, b) => Math.max(a, b), 0)
    }

    const config = {
      padding: [16, 48, 32, 16],
      xDomain: data.map(({ x }) => x),
      yDomain: [0, max.y],
      xScaleType: 'ordinal'
    }

    return (
      <Card className='ma3'>
        <CardBleed className='h5'>
          <ChartFrame {...config}>
            <AreaChart data={data} />
            <ChartAxis position='right' />
            <ChartAxis position='bottom' />
          </ChartFrame>
        </CardBleed>
      </Card>
    )
  })
