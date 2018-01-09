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

const LineChart = ({ className, data: _data, xScale, yScale, wScale, hScale, primary }: Props): Element<any> => {
  const data = _data
    .map((d, i) => {
      if (typeof d === 'number') return {x: i, y: d}
      return d
    })
  const offset = xScale.bandwidth ? xScale.bandwidth() / 2 : 0

  const line = d3.line()
    .x(({ x }) => xScale(x) + offset)
    .y(({ y }) => yScale(y))

  return (
    <g className={[
      className
    ].join(' ')}
    >
      <path className='fill-transparent stroke-foreground-80' d={line(data)} />
    </g>
  )
}

LineChart.defaultProps = {
  className: '',
  xScale: () => 0,
  yScale: () => 0,
  wScale: () => 0,
  hScale: () => 0,
  data: [],
  primary: false
}

LineChart.displayName = 'LineChart'

export default LineChart
export { LineChart }
