// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ChartBrushX from './index'
import ChartFrame from '../ChartFrame'
import ChartAxis from '../ChartAxis'
import BarChart from '../BarChart'
import LineChart from '../LineChart'
import Card, { CardBleed } from '../../core/Card'

storiesOf('charts.ChartBrushX', module)
  .add('basic', () => {
    const data = Array(10).fill(0).map((_, index) => ({x: index, y: Math.pow(index + 1, 3)}))
    const max = {
      x: data.map(({ x }) => x).reduce((a, b) => Math.max(a, b), 0) + 1,
      y: data.map(({ y }) => y).reduce((a, b) => Math.max(a, b), 0)
    }

    const config = {
      padding: [16, 16, 32, 16],
      xDomain: [0, max.x],
      yDomain: [0, max.y]
    }

    return (
      <Card className='ma3'>
        <CardBleed className='h5'>
          <ChartFrame {...config}>
            <BarChart data={data} />
            <ChartAxis position='bottom' />
            <ChartBrushX data={data} onChange={action('onChange')} />
          </ChartFrame>
        </CardBleed>
      </Card>
    )
  })
  .add('line chart', () => {
    const data = Array(100).fill(0).map((_, index) => ({x: index, y: Math.pow(index + 1, 3)}))
    const max = {
      x: data.map(({ x }) => x).reduce((a, b) => Math.max(a, b), 0),
      y: data.map(({ y }) => y).reduce((a, b) => Math.max(a, b), 0)
    }

    const config = {
      padding: [16, 16, 32, 16],
      xDomain: [0, max.x],
      yDomain: [0, max.y]
    }

    return (
      <Card className='ma3'>
        <CardBleed className='h5'>
          <ChartFrame {...config}>
            <LineChart data={data} />
            <ChartAxis position='bottom' />
            <ChartBrushX data={data} onChange={action('onChange')} />
          </ChartFrame>
        </CardBleed>
      </Card>
    )
  })
  .add('ordinal', () => {
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
            <BarChart data={data} />
            <ChartAxis position='right' />
            <ChartAxis position='bottom' />
            <ChartBrushX data={data} onChange={action('onChange')} />
          </ChartFrame>
        </CardBleed>
      </Card>
    )
  })
