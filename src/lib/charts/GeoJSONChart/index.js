// @flow
import React from 'react'
import type { Element } from 'react'
import * as d3 from 'd3'

export type Props = {
  className: string,
  xScale: Function,
  yScale: Function,
  data: Object,
  projection: Function
}

const GeoJSONChart = ({
  className,
  xScale,
  yScale,
  data,
  projection
}: Props
): Element<any> => {
  projection.fitExtent([
    [xScale.range()[0], yScale.range()[1]],
    [xScale.range()[1], yScale.range()[0]]
  ], data)
  const path = d3.geoPath()
    .projection(projection)

  return (
    <path className='fill-primary-100 stroke-transparent' d={path(data)} />
  )
}

GeoJSONChart.defaultProps = {
  className: '',
  xScale: () => 0,
  yScale: () => 0,
  wScale: () => 0,
  hScale: () => 0,
  data: {
    type: 'FeatureCollection',
    features: []
  },
  projection: d3.geoMercator()
}

GeoJSONChart.displayName = 'GeoJSONChart'

export default GeoJSONChart
export { GeoJSONChart }
