// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import BarChart from './index'
import ChartFrame from '../ChartFrame'
import ChartAxis from '../ChartAxis'
import Card from '../../core/Card'

storiesOf('charts', module)
  .add('BarChart: basic', () => {
    const data = [1, 2, 3, 4, 5]
    const max = {
      x: data.length,
      y: data.reduce((a, b) => Math.max(a, b), 0)
    }

    const config = {
      padding: [10, 40, 20, 10],
      xDomain: [0, max.x],
      yDomain: [0, max.y]
    }

    return (
      <Card>
        <ChartFrame {...config}>
          <BarChart data={data} />
          <ChartAxis position='right' />
          <ChartAxis position='bottom' />
        </ChartFrame>
      </Card>
    )
  })
  .add('BarChart: object values', () => {
    const data = Array(100).fill(0).map((_, index) => ({x: index, y: Math.pow(index + 1, 3)}))
    const max = {
      x: data.map(({ x }) => x).reduce((a, b) => Math.max(a, b), 0) + 1,
      y: data.map(({ y }) => y).reduce((a, b) => Math.max(a, b), 0)
    }

    const config = {
      padding: [10, 40, 20, 10],
      xDomain: [0, max.x],
      yDomain: [0, max.y]
    }

    return (
      <Card>
        <ChartFrame {...config}>
          <BarChart data={data} />
          <ChartAxis position='right' />
          <ChartAxis position='bottom' />
        </ChartFrame>
      </Card>
    )
  })
  .add('BarChart: ordinal values', () => {
    const data = Array(20).fill(0).map((_, index) => ({x: index, y: Math.pow(index + 1, 3)}))
    const max = {
      y: data.map(({ y }) => y).reduce((a, b) => Math.max(a, b), 0)
    }

    const config = {
      padding: [10, 40, 20, 10],
      xDomain: data.map(({ x }) => x),
      yDomain: [0, max.y],
      xScaleType: 'ordinal'
    }

    return (
      <Card>
        <ChartFrame {...config}>
          <BarChart data={data} />
          <ChartAxis position='right' />
          <ChartAxis position='bottom' />
        </ChartFrame>
      </Card>
    )
  })
