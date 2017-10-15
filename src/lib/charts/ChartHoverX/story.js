// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import 'tachyons'
import ChartHoverX from './index'
import ChartFrame from '../ChartFrame'
import ChartAxis from '../ChartAxis'
import BarChart from '../BarChart'
import LineChart from '../LineChart'

storiesOf('charts', module)
  .add('ChartHoverX: basic', () => {
    const data = Array(20).fill(0).map((_, index) => ({x: index, y: Math.pow(index + 1, 3)}))
    const max = {
      x: data.map(({ x }) => x).reduce((a, b) => Math.max(a, b), 0) + 1,
      y: data.map(({ y }) => y).reduce((a, b) => Math.max(a, b), 0)
    }

    const config = {
      padding: [10, 10, 20, 10],
      xDomain: [0, max.x],
      yDomain: [0, max.y]
    }

    return (
      <div className='ba b--black-50'>
        <ChartFrame {...config}>
          <BarChart data={data} />
          <ChartAxis position='bottom' />
          <ChartHoverX data={data} onHover={action('onHover')} />
        </ChartFrame>
      </div>
    )
  })
  .add('ChartHoverX: line chart', () => {
    const data = Array(100).fill(0).map((_, index) => ({x: index, y: Math.pow(index + 1, 3)}))
    const max = {
      x: data.map(({ x }) => x).reduce((a, b) => Math.max(a, b), 0),
      y: data.map(({ y }) => y).reduce((a, b) => Math.max(a, b), 0)
    }

    const config = {
      padding: [10, 10, 20, 10],
      xDomain: [0, max.x],
      yDomain: [0, max.y]
    }

    return (
      <div className='ba b--black-50'>
        <ChartFrame {...config}>
          <LineChart data={data} />
          <ChartAxis position='bottom' />
          <ChartHoverX data={data} onHover={action('onHover')} />
        </ChartFrame>
      </div>
    )
  })
  .add('(x) ChartHoverX: ordinal', () => {
    const data = Array(20).fill(0).map((_, index) => ({x: index, y: Math.pow(index + 1, 3)}))
    const max = {
      y: data.map(({ y }) => y).reduce((a, b) => Math.max(a, b), 0)
    }

    const config = {
      padding: [10, 10, 20, 10],
      xDomain: data.map(({ x }) => x),
      yDomain: [0, max.y],
      xScaleType: 'ordinal'
    }

    return (
      <div className='ba b--black-50'>
        <ChartFrame {...config}>
          <BarChart data={data} />
          <ChartAxis position='bottom' />
          <ChartHoverX data={data} onHover={action('onHover')} />
        </ChartFrame>
      </div>
    )
  })
