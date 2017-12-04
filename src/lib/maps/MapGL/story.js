import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'

import MapGL from './index'

storiesOf('maps.MapGL', module)
  .add('basic', () => (
    <div className='aspect-ratio--object'>
      <MapGL />
    </div>
  ))
  .add('updating fit', () => {
    class Stateful extends PureComponent {
      state = {
        fit: null
      }

      getRandomBBox = () => {
        const x = Math.random() * -180
        const y = Math.random() * -90
        const w = Math.random() * 180
        const h = Math.random() * 90
        return [
          [x, y],
          [x + w, y + h]
        ]
      }

      componentDidMount () {
        setInterval(() => {
          this.setState({fit: this.getRandomBBox()})
        }, 5 * 1000)
      }

      render () {
        const { fit } = this.state
        return (
          <div className='aspect-ratio--object'>
            <MapGL fit={fit} />
          </div>
        )
      }
    }

    return <Stateful />
  })
