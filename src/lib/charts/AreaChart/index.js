// @flow
import React from 'react'
import type { Element } from 'react'
import * as d3 from 'd3'

export type Props = {
  className: string,
  xScale: Function,
  yScale: Function,
  wScale: Function,
  hScale: Function,
  data: Array<number | Object>,
  primary?: boolean
}

const AreaChart = ({ className, data: _data, xScale, yScale, wScale, hScale, primary }: Props): Element<any> => {
  const data = _data
    .map((d, i) => {
      if (typeof d === 'number') return {x: i, y: d}
      return d
    })
  const offset = xScale.bandwidth ? xScale.bandwidth() / 2 : 0

  const area = d3.area()
    .x(({ x }) => xScale(x) + offset)
    .y0(yScale(0))
    .y1(({ y }) => yScale(y))

  return (
    <g className={[
      className
    ].join(' ')}
    >
      <path className='fill-foreground-80 stroke-transparent' d={area(data)} />
    </g>
  )
}

AreaChart.defaultProps = {
  className: '',
  xScale: () => 0,
  yScale: () => 0,
  wScale: () => 0,
  hScale: () => 0,
  data: [],
  primary: false
}

AreaChart.displayName = 'AreaChart'

export default AreaChart
export { AreaChart }
