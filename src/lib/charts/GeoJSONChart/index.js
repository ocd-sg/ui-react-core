// @flow
import React from 'react'
import type { Element } from 'react'
import * as d3 from 'd3'

export type Props = {
  className: string,
  data: Object,
  projection: Function
}

const GeoJSONChart = ({
  className,
  width,
  height,
  data,
  projection
}: Props
): Element<any> => {
  projection.fitSize([width, height], data)
  const path = d3.geoPath()
    .projection(projection)
  console.log(data, path(data))

  return (
    <path className='fill-primary-100 stroke-primary-100' d={path(data)} />
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
