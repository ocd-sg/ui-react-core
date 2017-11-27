// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import ChartPanZoom from './index'
import ChartFrame from '../ChartFrame'

const ChartDebug = ({ xScale, yScale }: {xScale: Function, yScale: Function}) => (
  Array(20).fill(0).map((_, index) => (
    <circle
      key={index}
      className='fill-foreground-100'
      cx={xScale(Math.random())}
      cy={yScale(Math.random())}
      r={Math.random() * 20 + 5}
    />
  ))
)

storiesOf('charts', module)
  .add('ChartPanZoom: basic', () => (
    <div className='aspect-ratio--object'>
      <ChartFrame>
        <ChartPanZoom>
          <ChartDebug />
        </ChartPanZoom>
      </ChartFrame>
    </div>
  ))
