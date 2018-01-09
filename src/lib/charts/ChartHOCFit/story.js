// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import ChartHOCFit from './index'
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

storiesOf('charts.ChartHOCFit', module)
  .add('basic', () => (
    <div className='absolute top-0 bottom-0 left-0 right-0'>
      <ChartFrame>
        <ChartHOCFit fit={[[100, 100], [200, 200]]}>
          <rect
            className='fill-primary-100'
            x={100}
            y={100}
            width={100}
            height={100}
          />
          <ChartDebug />
        </ChartHOCFit>
      </ChartFrame>
    </div>
  ))
