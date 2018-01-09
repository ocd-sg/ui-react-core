// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import ChartFrame from '../ChartFrame'
import ChartHOCFit from '../ChartHOCFit'
import ChartHOCPanZoom from './index'

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

storiesOf('charts.ChartHOCPanZoom', module)
  .add('basic', () => (
    <div className='aspect-ratio--object'>
      <ChartFrame>
        <ChartHOCPanZoom>
          <ChartDebug />
        </ChartHOCPanZoom>
      </ChartFrame>
    </div>
  ))
  .add('with `fit` prop', () => (
    <div className='aspect-ratio--object'>
      <ChartFrame>
        <ChartHOCPanZoom fit={[[100, 100], [200, 200]]}>
          <rect
            className='fill-primary-100'
            x={100}
            y={100}
            width={100}
            height={100}
          />
          <ChartDebug />
        </ChartHOCPanZoom>
      </ChartFrame>
    </div>
  ))
  .add('with ChartHOCFit', () => (
    <div className='aspect-ratio--object'>
      <ChartFrame>
        <ChartHOCPanZoom>
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
        </ChartHOCPanZoom>
      </ChartFrame>
    </div>
  ))
