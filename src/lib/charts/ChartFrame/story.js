// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import ChartFrame from './index'

const ChartDebug = ({ xScale, yScale, wScale, hScale }: {xScale: Function, yScale: Function, wScale: Function, hScale: Function}) => (
  <g transform={`translate(${xScale(0)}, ${yScale(1)})`}>
    <rect
      className='fill-background-70'
      width={wScale(1)}
      height={hScale(1)}
    />
    <text className='fill-foreground-100' dy='1em'>
      A container for charts, dimensions: {xScale.range()[1]} by {yScale.range()[0]}
    </text>
  </g>
)

storiesOf('charts', module)
  .add('ChartFrame: basic', () => (
    <div className='aspect-ratio--object'>
      <ChartFrame>
        <ChartDebug />
      </ChartFrame>
    </div>
  ))
  .add('ChartFrame: padding 15', () => (
    <div className='aspect-ratio--object'>
      <ChartFrame padding={15}>
        <ChartDebug />
      </ChartFrame>
    </div>
  ))
  .add('ChartFrame: padding [15, 30]', () => (
    <div className='aspect-ratio--object'>
      <ChartFrame padding={[15, 30]}>
        <ChartDebug />
      </ChartFrame>
    </div>
  ))
