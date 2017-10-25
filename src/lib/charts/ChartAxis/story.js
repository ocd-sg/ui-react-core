// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import ChartAxis from './index'
import ChartFrame from '../ChartFrame'

storiesOf('charts', module)
  .add('ChartAxis: basic', () => {
    const data = Array(20).fill(0).map((_, index) => ({x: index, y: Math.pow(index + 1, 3)}))
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
      <div className='ba b--black-50'>
        <ChartFrame {...config}>
          <ChartAxis position='right' />
          <ChartAxis position='bottom' />
        </ChartFrame>
      </div>
    )
  })
  .add('ChartAxis: ordinal', () => {
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
      <div className='ba b--black-50'>
        <ChartFrame {...config}>
          <ChartAxis position='right' />
          <ChartAxis position='bottom' />
        </ChartFrame>
      </div>
    )
  })
