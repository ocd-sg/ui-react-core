import React from 'react'
import { storiesOf } from '@storybook/react'

import ChartFrame from '../ChartFrame'
import GeoJSONChart from './index'

const data = {
  type: 'FeatureCollection',
  features: Array(10).fill(0).map((_, index) => ({
    type: 'Feature',
    properties: { index },
    geometry: {
      type: 'Polygon',
      coordinates: [
        Array(3).fill(0).map(() => [
          Math.random() * 20 - 10,
          Math.random() * 20 - 10
        ])
      ]
    }
  }))
}

storiesOf('charts.GeoJSONChart', module)
  .add('basic', () => {
    return (
      <div className='w-100 h-100'>
        <ChartFrame>
          <GeoJSONChart
            data={data}
          />
        </ChartFrame>
      </div>
    )
  })
