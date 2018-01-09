import React from 'react'
import { storiesOf } from '@storybook/react'
import { randomPolygon } from '@turf/turf'

import ChartFrame from '../ChartFrame'
import GeoJSONChart from './index'

const data = randomPolygon(25, { bbox: [Math.random() * -180, Math.random() * -90, Math.random() * 180, Math.random() * 90] })
data.features = data.features.map((feature, index) => ({ ...feature, properties: { index } }))

storiesOf('charts.GeoJSONChart', module)
  .add('[WIP] basic', () => {
    return (
      <div className='absolute top-0 bottom-0 left-0 right-0'>
        <ChartFrame padding={15}>
          <GeoJSONChart
            data={data}
          />
        </ChartFrame>
      </div>
    )
  })
