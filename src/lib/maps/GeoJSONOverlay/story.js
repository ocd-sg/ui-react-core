import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { randomPolygon } from '@turf/turf'

import MapGL from '../MapGL'
import GeoJSONOverlay from './index'

const data = randomPolygon(25, { bbox: [Math.random() * -180, Math.random() * -90, Math.random() * 180, Math.random() * 90] })
data.features = data.features.map((feature, index) => ({ ...feature, properties: { index } }))

storiesOf('maps.GeoJSONOverlay', module)
  .add('fill', () => {
    const config = {
      id: 'random-polygons',
      type: 'fill',
      layout: {},
      paint: {
        'fill-color': {
          property: 'index',
          stops: [
            [0, '#f90'],
            [10, '#f09']
          ]
        },
        'fill-opacity': 0.5
      }
    }

    return (
      <div className='aspect-ratio--object'>
        <MapGL>
          <GeoJSONOverlay
            {...config}
            data={data}
            onFeatureHover={action('onFeatureHover')}
            onFeatureClick={action('onFeatureClick')}
          />
        </MapGL>
      </div>
    )
  })
  .add('line', () => {
    const config = {
      id: 'random-lines',
      type: 'line',
      layout: {},
      paint: {
        'line-color': {
          property: 'index',
          stops: [
            [0, '#f90'],
            [10, '#f09']
          ]
        }
      }
    }

    return (
      <div className='aspect-ratio--object'>
        <MapGL>
          <GeoJSONOverlay
            {...config}
            data={data}
            onFeatureHover={action('onFeatureHover')}
            onFeatureClick={action('onFeatureClick')}
          />
        </MapGL>
      </div>
    )
  })
  .add('circle', () => {
    const config = {
      id: 'random-circles',
      type: 'circle',
      layout: {},
      paint: {
        'circle-color': {
          property: 'index',
          stops: [
            [0, '#f90'],
            [10, '#f09']
          ]
        },
        'circle-radius': 10
      }
    }

    return (
      <div className='aspect-ratio--object'>
        <MapGL>
          <GeoJSONOverlay
            {...config}
            data={data}
            onFeatureHover={action('onFeatureHover')}
            onFeatureClick={action('onFeatureClick')}
          />
        </MapGL>
      </div>
    )
  })
